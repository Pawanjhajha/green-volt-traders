import mongoose from "mongoose";
import slugify from 'slugify';

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
    },
    slug:{
        type:String,
    }
},{timestamps:true,versionKey:false});
categorySchema.index({name:1},{slug:1},{unique:true});
categorySchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("name")) {
      let slug = slugify(this.name, { lower: true, strict: true });
  
      // Ensure uniqueness by appending a number if the slug already exists
      let count = 1;
      let uniqueSlug = slug;
      
      while (await mongoose.model("core_product_categories").exists({ slug: uniqueSlug })) {
        uniqueSlug = `${slug}-${count}`;
        count++;
      }
  
      this.slug = uniqueSlug;
    }
    next();
  });
export const CategoryModel=mongoose.model('core_product_categories',categorySchema);

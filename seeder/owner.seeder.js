import { UserModel } from "../models/user.model.js"; 

// Default users to seed into the database
const defaultUsers = [
  {
    email: 'pawan@gmail.com',
    password: 'password',
    isOwner: true,
    isActive: true,
  },
];

// OwnerSeeder function to create users
export async function OwnerSeeder() {
    try {
        await Promise.all(
          defaultUsers.map(async (user) => {
            const updatedUser = await UserModel.findOneAndUpdate(
              { email: user.email },
              { $set: user }, 
              { new: true, upsert: true } 
            );
            console.log(`User ${updatedUser.email} has been updated or created.`);
          })
        );
        console.log("Owner seeding completed");
      } catch (error) {
        console.error("Error during owner seeding:", error);  // Log any error that occurs
        throw error;  // Re-throw the error to be caught in the main seeder function
      }
}

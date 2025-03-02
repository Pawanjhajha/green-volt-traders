//set 1 we need to create an instance of axios
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;
const AxiosApi=axios.create({
    baseURL:baseURL
})//create method me hame ek object pass krna hota hai.usame ek propetry define krni hoti hai =baseURL.baseURL ki hame ek value deni hoti h that is your actual api jaha se data ko get krna hai

//step2 me hame function create karne hote hai use function me kon sa method use krna hai wo define krna hota hai
//get method
export const getUser=()=>{
    //ab AxiosApi instance ke pass method hote hai 
    //ex.get() esame wo path define krna hoga
    return AxiosApi.get('/get');
}
 //ab AxiosApi instance ke pass method hote hai 
    //ex.get() esame wo path define krna hoga
export const LogInUser=(data)=>{
    return AxiosApi.post('/auth',data);
}
export const createCategory=(data)=>{
    return AxiosApi.post('/product/category',data)
}

import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        requird:true,
    },
    email:{
        type:String,
        requried:true,
        unique:true,
        
    },
    password:{
        type:String,
        requried:true
    },
    role:{
        type:String,
        requried:true
    }
    
})
const UserModel=mongoose.model("User",userSchema)
export default UserModel
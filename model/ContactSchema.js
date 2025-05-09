import mongoose from "mongoose";
import validator from'validator'
  

const ContactSchema= new mongoose.Schema({
  Name:{
    type:String,
    require:true
  },
  Email:{
    type:String,
           unique:true,
           required:[true,'email is required'],
           lowercase:true,
           trim:true,
           validate: {
               validator: (email) => validator.isEmail(email),
               message: (props) => `${props.value} is not a valid email address!`,
             },
  },
  Message:{
    type:String,
    require:true
  }
})
const Contact=mongoose.model("contact",ContactSchema);
export default Contact
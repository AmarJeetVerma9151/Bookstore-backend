
// import Contact from '../model/ContactSchema.js';
import ContactSchema from '../model/ContactSchema.js'


export const CreateContact=async(req,res)=>{
    const {Name,Email,Message}=req.body
    try {
        if(!Name){
        return res.json(400).json({error:"Name is required",success:false,error:error.Message})
    }
    if(!Email){
        return res.json(400).json({error:"Email is required",success:false,error:error.Message})
    }
    if(!Message){
        return res.json(400).json({error:"Message is required",success:false,error:error.message})
    }
    else{
        const newcontact=await ContactSchema.create({
            Name:Name,
            Email:Email,
            Message:Message
        })
        return res.status(200).json({Message:"Contact created successfully",success:true,newcontact})
    }
    } catch (error) {
        res.json({msg:"Contact not created",success:false,error:error.message})
    }

}


export const GetContact=async(req,res)=>{
    try {
        const contact=await ContactSchema.find()
        return res.status(200).json({Message:"Contact fetched successfully",success:true,contact})
    } catch (error) {
        return res.status(400).json({error:"Contact not found",success:false})
    }
}

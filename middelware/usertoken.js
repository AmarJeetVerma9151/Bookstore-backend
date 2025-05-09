import jwt from "jsonwebtoken";
const JWT_SECRET = "amar1090";



const usertoken=async(req,res,next)=>{
const token=req.headers.authorization;
if(!token){
res.json({msg:"please provide valid token"})
}
const decoded =  await jwt.verify(token,JWT_SECRET)
req.user =decoded;
next();

}

export default usertoken;
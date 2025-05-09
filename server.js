import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from'./route/BookRoute.js'
import cors from 'cors'
import userRoute from './route/UserRoute.js'
import createRoute from './route/CreateRoute.js'

const app = express();



app.use(express.json());
app.use(cors())
  dotenv.config();
  const PORT=process.env.PORT||8090;
  const URL=process.env.MongoDB_URL;


//Connecting to MongoDB

try {

    mongoose.connect(URL).then(()=>console.log("MongoDB connected successfully")).catch((error)=>console.log("MongoDB connection failed",error.message))
} catch (error) {
    console.log("MongoDB connection failed",error.message);
}

//difining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/contact",createRoute)


app.listen(PORT, () => {
    console.log(`server is runing port ${PORT}`);
})

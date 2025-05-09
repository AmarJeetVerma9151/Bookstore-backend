import express from "express";
import { deleteuser, login, singup, update } from "../controller/UserController.js";
const router = express.Router();
import usertoken from "../middelware/usertoken.js";


router.post("/singup",singup)
router.post("/login",login)
router.put("/update",usertoken,update)
router.delete("/delete",usertoken,deleteuser)

export default router;
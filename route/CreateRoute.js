import express from 'express';
import { CreateContact, GetContact } from '../controller/ContactController.js';

const router=express.Router()


router.post("/usercontact",CreateContact)
router.get("/getcontact",GetContact)

export default router;
import express from 'express';
import { Addbook, allbooks, deleteBooks, findfreebook, findpaidbook, getBook } from '../controller/BookController.js';


const router =express.Router()
router.get("/",getBook)
// router.get('/searchbook',SearchBook);
router.post("/addbook",Addbook)
router.post("/allbooks",allbooks)
router.get("/freebooks",findfreebook)
router.get("/paidbooks",findpaidbook)
router.delete("/deletebook/:_id",deleteBooks)

export default router
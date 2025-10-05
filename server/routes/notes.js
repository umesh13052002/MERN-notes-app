import express from 'express';
import NoteSchema from '../models/Note';
const router = express.Router();
router.post('/add', (req,res)=>{
    const {title, description} = req.body;
    const newNote = new NoteSchema({title,description})

})

export default router;
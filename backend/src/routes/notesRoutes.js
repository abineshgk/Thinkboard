import express, { Router } from "express";
import { createNote, deleteNote, getallNotes, getNoteById, updateNote } from "../controllers/notesControllers.js";



const router = express.Router();

router.get("/",getallNotes)
router.get("/:id",getNoteById)
router.post("/", createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);


export default router;
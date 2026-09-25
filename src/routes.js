import express from 'express';
import { createNote, deleteNotesById,editNotesById ,getNotes, getNotesById } from './controller.js';

const router = express.Router();
router.post('/notes', createNote);
router.get('/notes', getNotes)
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', editNotesById);
router.delete('/notes/:id', deleteNotesById);


export default router;
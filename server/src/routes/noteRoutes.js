import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  addNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", addNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

router.get("/", authMiddleware, getNotes);

router.post("/", authMiddleware, addNote);

router.put("/:id", authMiddleware, updateNote);

router.delete("/:id", authMiddleware, deleteNote);

export default router;
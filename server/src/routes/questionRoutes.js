import express from "express";

import {
  getQuestions,
  getQuestionById,
  addQuestion,
} from "../controllers/questionController.js";

const router = express.Router();

router.get("/", getQuestions);

router.get("/:id", getQuestionById);

router.post("/", addQuestion);

export default router;
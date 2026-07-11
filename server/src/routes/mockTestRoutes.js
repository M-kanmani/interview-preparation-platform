import express from "express";
import {
  createMockTest,
  getMockTests,
} from "../controllers/mockTestController.js";

const router = express.Router();

router.post("/", createMockTest);
router.get("/", getMockTests);

export default router;
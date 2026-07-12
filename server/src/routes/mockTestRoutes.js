import express from "express";
import {
  createMockTest,
  getMockTests,
  getMockTestById,
} from "../controllers/mockTestController.js";

const router = express.Router();

router.post("/", createMockTest);

router.get("/", getMockTests);

// Get Single Mock Test
router.get("/:id", getMockTestById);

export default router;
import express from "express";
import {
  addBookmark,
  getBookmarks,
  deleteBookmark,
} from "../controllers/bookmarkController.js";

const router = express.Router();

router.get("/", getBookmarks);
router.post("/", addBookmark);
router.delete("/:id", deleteBookmark);

export default router;
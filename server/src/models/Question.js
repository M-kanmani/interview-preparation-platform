import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      default: "General",
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Question", questionSchema);
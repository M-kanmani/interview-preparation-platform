import express from "express";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import mockTestRoutes from "./routes/mockTestRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/mocktests", mockTestRoutes);
app.use("/api/users", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Interview Preparation Platform Backend Running",
  });
});

export default app;
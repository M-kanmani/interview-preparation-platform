import Progress from "../models/Progress.js";

// Add Progress
export const addProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

    res.status(201).json({
      success: true,
      message: "Progress Added Successfully",
      data: progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Progress
export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find()
      .populate("user")
      .populate("question");

    res.status(200).json({
      success: true,
      count: progress.length,
      data: progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
import Question from "../models/Question.js";

// Get All Questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Question
export const addQuestion = async (req, res) => {
  try {
    console.log(req.body);

    const question = await Question.create(req.body);
  
    res.status(201).json({
      success: true,
      message: "Question Added Successfully",
      data: question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
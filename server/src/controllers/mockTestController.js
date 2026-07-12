import MockTest from "../models/MockTest.js";

// Create Mock Test
export const createMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.create(req.body);

    res.status(201).json({
      success: true,
      message: "Mock Test Created Successfully",
      data: mockTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Mock Tests
export const getMockTests = async (req, res) => {
  try {
    const tests = await MockTest.find();

    res.status(200).json({
      success: true,
      count: tests.length,
      data: tests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Single Mock Test
export const getMockTestById = async (req, res) => {
  try {
    const test = await MockTest.findById(req.params.id);

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Mock Test Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: test,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
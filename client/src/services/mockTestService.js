import api from "./api";

// Get all mock tests
export const getMockTests = async () => {
  const response = await api.get("/mocktests");
  return response.data;
};

// Create a new mock test
export const createMockTest = async (testData) => {
  const response = await api.post("/mocktests", testData);
  return response.data;
};
export const getMockTestById = async (id) => {
  const response = await api.get(`/mocktests/${id}`);
  return response.data;
};
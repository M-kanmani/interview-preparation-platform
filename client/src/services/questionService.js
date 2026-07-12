import api from "./api";

export const getQuestions = async () => {
  const response = await api.get("/questions");
  return response.data;
};

export const getQuestionById = async (id) => {
  const response = await api.get(`/questions/${id}`);
  return response.data;
};
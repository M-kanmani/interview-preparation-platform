import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../services/questionService";
import { addBookmark } from "../services/bookmarkService";

function QuestionDetails() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const data = await getQuestionById(id);
      setQuestion(data.data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleBookmark = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first");
        return;
      }

      await addBookmark({
        user: user.id,
        question: question._id,
      });

      alert("Bookmark Added Successfully!");
    } catch (error) {
      console.error("Bookmark Error:", error.response?.data || error.message);
      alert("Failed to add bookmark");
    }
  };

  if (!question) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{question.title}</h2>

      <p>
        <strong>Description:</strong> {question.description}
      </p>

      <p>
        <strong>Difficulty:</strong> {question.difficulty}
      </p>

      <br />

      <button onClick={handleBookmark}>
        ⭐ Add Bookmark
      </button>
    </div>
  );
}

export default QuestionDetails;
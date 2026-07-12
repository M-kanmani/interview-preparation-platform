import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../services/questionService";

function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      console.log(data);
      setQuestions(data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Questions</h2>

      {questions.length === 0 ? (
        <p>No Questions Found</p>
      ) : (
        questions.map((question) => (
          <Link
            key={question._id}
            to={`/questions/${question._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <h3>{question.title}</h3>
              <p>{question.description}</p>
              <p>
                <strong>Difficulty:</strong> {question.difficulty}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Questions;
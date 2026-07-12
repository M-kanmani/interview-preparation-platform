import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMockTestById } from "../services/mockTestService";

function StartTest() {
  const { id } = useParams();

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTest();
  }, []);

  const fetchTest = async () => {
    try {
      const response = await getMockTestById(id);
      setTest(response.data);
    } catch (error) {
      console.error("Error fetching mock test:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  if (!test) return <h2>Mock Test Not Found</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{test.title}</h1>

      <p>
        <strong>Category:</strong> {test.category}
      </p>

      <p>
        <strong>Total Questions:</strong> {test.totalQuestions}
      </p>

      <p>
        <strong>Duration:</strong> {test.duration} Minutes
      </p>

      <button>Start Exam</button>
    </div>
  );
}

export default StartTest;
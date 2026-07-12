import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMockTests,
  createMockTest,
} from "../services/mockTestService";

function MockTest() {
  const navigate = useNavigate();

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    totalQuestions: "",
    duration: "",
  });

  useEffect(() => {
    fetchMockTests();
  }, []);

  const fetchMockTests = async () => {
    try {
      const response = await getMockTests();
      setTests(response.data);
    } catch (error) {
      console.error("Error fetching mock tests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createMockTest(formData);

      alert("Mock Test Created Successfully!");

      setFormData({
        title: "",
        category: "",
        totalQuestions: "",
        duration: "",
      });

      fetchMockTests();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Mock Test</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="totalQuestions"
          placeholder="Total Questions"
          value={formData.totalQuestions}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="duration"
          placeholder="Duration (Minutes)"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Create Mock Test</button>
      </form>

      <hr />

      <h2>Available Mock Tests</h2>

      {tests.length === 0 ? (
        <p>No Mock Tests Available</p>
      ) : (
        tests.map((test) => (
          <div
            key={test._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{test.title}</h3>

            <p>
              <strong>Category:</strong> {test.category}
            </p>

            <p>
              <strong>Total Questions:</strong> {test.totalQuestions}
            </p>

            <p>
              <strong>Duration:</strong> {test.duration} Minutes
            </p>

            <p>
              <strong>Score:</strong> {test.score}
            </p>

            <button
              onClick={() =>navigate(`/start-test/${test._id}`)}
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              🚀 Start Test
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MockTest;
import { useEffect, useState } from "react";
import {
  getProgress,
  addProgress,
} from "../services/progressService";

function Progress() {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const data = await getProgress();
      setProgressList(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProgress = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const questionId = prompt("Enter Question ID");

    if (!questionId) return;

    try {
      await addProgress({
        user: user.id,
        question: questionId,
        completed: true,
      });

      alert("Progress Added Successfully");

      fetchProgress();
    } catch (error) {
      console.error(error);
      alert("Failed to add progress");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Progress</h2>

      <button onClick={handleAddProgress}>
        Add Progress
      </button>

      <hr />

      {progressList.length === 0 ? (
        <p>No Progress Found</p>
      ) : (
        progressList.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>
              {item.question?.title || "Question"}
            </h3>

            <p>
              Status:{" "}
              {item.completed ? "✅ Completed" : "❌ Not Completed"}
            </p>

            <p>
              User: {item.user?.fullName}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Progress;
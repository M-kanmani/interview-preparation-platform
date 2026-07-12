import { useEffect, useState } from "react";
import {
  getBookmarks,
  deleteBookmark,
} from "../services/bookmarkService";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const data = await getBookmarks();
      setBookmarks(data.data);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBookmark(id);
      alert("Bookmark Deleted");
      fetchBookmarks();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete bookmark");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p>No Bookmarks Found</p>
      ) : (
        bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{bookmark.question?.title}</h3>

            <p>{bookmark.question?.description}</p>

            <p>
              <strong>Difficulty:</strong>{" "}
              {bookmark.question?.difficulty}
            </p>

            <button onClick={() => handleDelete(bookmark._id)}>
              Delete Bookmark
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookmarks;
import Bookmark from "../models/Bookmark.js";

// Add Bookmark
export const addBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.create(req.body);

    res.status(201).json({
      success: true,
      message: "Bookmark Added",
      data: bookmark,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Bookmarks
export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find()
      .populate("question")
      .populate("user");

    res.status(200).json({
      success: true,
      count: bookmarks.length,
      data: bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Bookmark
export const deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Bookmark Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
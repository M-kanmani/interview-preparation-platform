import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tips from "./pages/Tips";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Questions from "./pages/Questions";

import Companies from "./pages/Companies";
import Bookmarks from "./pages/Bookmarks";
import Notes from "./pages/Notes";
import MockTest from "./pages/MockTest";
import Progress from "./components/Progress";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tips" element={<Tips />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
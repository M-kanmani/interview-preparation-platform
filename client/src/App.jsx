import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";
import Companies from "./pages/Companies";
import Bookmarks from "./pages/Bookmarks";
import Notes from "./pages/Notes";
import MockTest from "./pages/MockTest";
import StartTest from "./pages/StartTest"; // ✅ Added
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import Planner from "./pages/Planner";
import Achievements from "./pages/Achievements";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/profile" element={<Profile />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions/:id" element={<QuestionDetails />} />

      {/* ✅ New Route */}
      <Route path="/start-test/:id" element={<StartTest />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/mock-test" element={<MockTest />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
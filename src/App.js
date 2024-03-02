import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import Navbar from "./components/Buttons/Navbar/Navbar";
function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

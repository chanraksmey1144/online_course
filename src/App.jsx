// src/App.jsx (Updated with new routes)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./context/CourseProvider";
import Homepage from "./pages/Homepage";
import CoursePage from "./pages/CoursePage";
import LoginPage from "./pages/LoginPage"; // NEW: Import Login Page
import SignUpPage from "./pages/SigupPage"; // NEW: Import Sign Up Page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";

function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/login" element={<LoginPage />} />       {/* NEW ROUTE */}
          <Route path="/signup" element={<SignUpPage />} />     {/* NEW ROUTE */}
          {/* Add a placeholder route for Section1 if needed */}
          <Route path="/content" element={<Section1/>} /> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
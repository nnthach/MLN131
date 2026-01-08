import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Exercise from "./pages/Exercise";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />
      <ChatBot/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </Router>
  );
}

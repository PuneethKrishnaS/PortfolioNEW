import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import BottemBar from "./components/BottemBar.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Achivements from "./pages/Achivements.jsx";

export default function App() {
  return (
    <div className="min-h-full ">
      <div className="container mx-auto ">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achivements" element={<Achivements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <BottemBar />
      </div>
    </div>
  );
}

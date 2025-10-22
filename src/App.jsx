import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BottemBar from "./components/Bottembar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Achivements from "./pages/Achivements";

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

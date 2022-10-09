import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import CTA1 from "./components/layout/CTA1";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";
import GitHub from "./components/layout/GitHub";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen p-5">
        <Navbar />
        <div className="p-10 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<CTA1 />} />
          </Routes>
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

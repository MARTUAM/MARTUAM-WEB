import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-martuam-gold selection:text-martuam-navy">
        <div className="grain-texture" />
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

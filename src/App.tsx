import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <div className={`relative min-h-screen transition-colors duration-500 ${
        theme === "dark" 
          ? "bg-martuam-navy text-white selection:bg-martuam-gold selection:text-martuam-navy" 
          : "bg-slate-50 text-slate-900 selection:bg-martuam-gold selection:text-white"
      }`}>
        <div className="grain-texture opacity-[0.03]" />
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

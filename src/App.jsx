import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import Discover from "./pages/Discover";

import AudioPlayer from "./components/AudioPlayer"; // 🔥 AudioPlayer import ettik

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      
      <div className="main-content">
        <Routes>
          <Route path="/discover" element={<Discover />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <AudioPlayer /> 
      </div>
    </div>
  );
};

export default App;

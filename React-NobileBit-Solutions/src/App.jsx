import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Profile from "./Pages/Profile.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
return (
<div>
<Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          {/* This route matches any unknown URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
);
}

export default App;
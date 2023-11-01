import { Route, Routes } from "react-router-dom";

import { LikedPhotosProvider } from "./components/context/LikedPhotosContext";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";
import "./App.css";

function App() {

  return (
    <div>
      <LikedPhotosProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LikedPhotosProvider>
    </div>
  );
}

export default App;

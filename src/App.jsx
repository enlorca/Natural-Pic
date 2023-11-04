import { Route, Routes } from "react-router-dom";

import { LikedPhotosProvider } from "./components/context/LikedPhotosContext";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";


function App() {

  return (
    <div>
      <LikedPhotosProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LikedPhotosProvider>
    </div>
  );
}

export default App;

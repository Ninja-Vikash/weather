import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { preloadImages } from "./utils/preloadImage";

function App() {
  // Background images state
  const [background, setBackground] = useState("/img/1.avif")

  useEffect(() => {
    // Preload images
    const imageUrls = Array.from({ length: 9 }, (_, i) => `/img/${i + 1}.avif`);
    preloadImages(imageUrls);
    // console.log(imageUrls)
  }, []);

  // Function for setting a random background image
  const theme = () => {
    const bgImageIndex = Math.ceil(Math.random() * 9);
    const bgImageUrl = `/img/${bgImageIndex}.avif`;

    // Create a new Image object to preload the new background image
    const img = new Image();
    img.src = bgImageUrl;
    img.onload = () => {
      // Once the image is loaded, set the background state
      setBackground(bgImageUrl);
      // console.log(bgImageUrl)
    };
  };

  const style = {
    backgroundImage: `url(${background})`
  }

  return (
    <BrowserRouter>
      <main style={style}>
        <Navbar theme={theme}/>

        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="forecast" element={<Forecast />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>

        <footer>
          <div className="content container">
            <p>&copy; Copyright reserved | Vikash Kumar</p>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { preloadImages } from "./utils/preloadImage";



function App() {
  // Background images state
  const [background, setBackground] = useState("1")

  useEffect(() => {
    // Preload images
    const imageUrls = Array.from({ length: 9 }, (_, i) => `/img/${i + 1}.avif`);
    preloadImages(imageUrls);
    console.log(imageUrls)
  }, []);

  // Function for setting a random background image
  const theme = (data)=> {
    let bgImage = Math.ceil(Math.random() * 9)
    console.log(bgImage)
    setBackground(`${bgImage}`)
  }

  const style = {
    backgroundImage: `url("/img/${background}.avif")`
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

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

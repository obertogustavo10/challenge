import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather"; 



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clima" element={<Weather/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

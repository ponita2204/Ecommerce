import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Menu from "./components/menu";
import About from "./components/about";
import BookTable from "./components/booktable";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookTable />} />
      </Routes>
  
    </>
  );
}

export default App;

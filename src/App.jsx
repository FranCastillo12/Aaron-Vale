import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainContent from "./pages/Main-Content";  


  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main-Content" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App

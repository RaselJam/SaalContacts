import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    
    <Routes>
      <Route path="/"  element={<Navigate replace to="/contacts" />}/>
      <Route path="/contacts" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} />
    </Routes>
  );
}

export default App;

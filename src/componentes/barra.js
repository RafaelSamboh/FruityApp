//import React from 'react'
import Call from "./frutas";
import Inicio from "./inicio";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Bar() {
  return (
    <Router>
      <nav>
        <Link to="/frutas">Frutas</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/inicio">Inicio</Link>&nbsp;&nbsp;&nbsp;
      </nav>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/frutas" element={<Call />} />
      </Routes>
    </Router>
  );
}

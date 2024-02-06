import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./MainPage";
import Nutzer from "./nutzer";
import Ausbilder from "./Ausbilder";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
  <Routes>
  <Route path="/MainPage" element={<MainPage />} />
    <Route path="/nutzer" element={<Nutzer />} />
    <Route path="/Ausbilder" element={<Ausbilder />} />
    </Routes>  
  </Router>
    </div>
  );
  function Navbar () {
    return (
      <nav>
        <Link className={"NavLink"} to="/MainPage">MainPage</Link>
        <Link className={"NavLink"} to="/nutzer">Teilnehmer</Link>
        <Link className={"NavLink"} to="/Ausbilder">Ausbilder</Link>
      </nav>
     )
  }
}
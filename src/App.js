import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./MainPage";
import Nutzer from "./Nutzer";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
  <Routes>
  <Route path="/MainPage" element={<MainPage />} />
    <Route path="/Nutzer" element={<Nutzer />} />
    </Routes>  
  </Router>
    </div>
  );
  function Navbar () {
    return (
      <nav>
        <Link className={"NavLink"} to="/MainPage">MainPage</Link>
        <Link className={"NavLink"} to="/Nutzer">Nutzer</Link>
      </nav>
     )
  }
}
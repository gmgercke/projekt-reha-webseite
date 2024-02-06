import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import MainPart from "./MainPart";
import Footer from "./Footer";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <Link to="https://www.google.com">Go to Google</Link>
  <Header />
  <MainPart />
  <Footer />
    </div>
  );
}
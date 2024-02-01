import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import MainPart from "./MainPart";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
  <Header />
  <MainPart />
  <Footer />
    </div>
  );
}
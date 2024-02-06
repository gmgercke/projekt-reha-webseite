import React from "react";
import Header from "./Header";
import AusbilderMain from "./AusbilderMain";
import Footer from "./Footer";
import "./Ausbilder.css";


export default function Ausbilder() {
    return (
      <div className="Ausbilder">
        <Header />
        <AusbilderMain />
        <Footer />
        </div>
    );
}
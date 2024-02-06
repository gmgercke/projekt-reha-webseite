import React from "react";
import Header from "./Header";
import NutzerMain from "./NutzerMain";
import Footer from "./Footer";
import "./Nutzer.css";


export default function Nutzer() {
    return (
        <div className="Nutzer">
        <Header />
        <NutzerMain />
        <Footer />
        </div>

    );
}
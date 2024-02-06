import React from "react";
import Header from "./Header";
import NutzerMain from "./NutzerMain";
import Footer from "./Footer";
import "./nutzer.css";
import "./darkmode.css";


export default function nutzer() {
    return (
        <div className="nutzer">
        <Header />
        <NutzerMain />
        <Footer />
        </div>

    );
}
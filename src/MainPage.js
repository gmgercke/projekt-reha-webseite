import React from "react";
import Header from "./Header";
import MainPart from "./MainPart";
import Footer from "./Footer";
import "./darkmode.css";


export default function MainPage() {
    return (
      <div className="MainPage">
        <Header />
        <MainPart />
        <Footer />
        </div>
    );
}
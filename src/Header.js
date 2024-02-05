import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="Header">
    <nav class="d-flex justify-content-between">
      <img
        src="bfw-logo.png"
        class="logo d-none d-sm-block"
        alt="Logo"
        title="Logo"
        height="50"
      />
      <ul>
        <li class="active"><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/work.html">Work</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
        </div>
      );

}
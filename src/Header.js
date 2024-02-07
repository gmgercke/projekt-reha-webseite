import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "./Header.css";
import logo from "./bfw-logo.png";
import "./darkmode.css";

export default function Header() {
    return (
        <div className="Header">
          <div class="topbar">
    <nav class="d-flex justify-content-between">
      <table>
        <tr>
          <td>
            <div class="img-bg">
      <img
        src={logo}
        class="logo d-none d-sm-block"
        alt="Logo"
        title="Logo"
        height="150"
      />
      </div>
    </td>
    <td>
      <Menu isOpen={false} width={ '300px' } noOverlay left>
      <a id="aktuelles" className="menu-item" href="/">Aktuelles</a>
      <a id="programm" className="menu-item" href="/">Unser Programm</a>
      <a id="standorte" className="menu-item" href="/">Standorte</a>
      <a id="service" className="menu-item" href="/">Service</a>
      <a id="login" className="menu-item" href="/">Teilnehmer Login</a>
      </Menu>
      </td>
      </tr>
      </table>
    </nav>
    </div>
        </div>
      );
}
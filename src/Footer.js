import React from "react";
import "./Footer.css";
import Table from 'react-bootstrap/Table';

export default function Footer() {
    return (
        <div className="Footer">
          <div class="table-responsive-md" >
          <Table class="footertable" variant="striped">
    <thead>
        <tr>
            <td>Aktuelles</td>
            <td>Programm</td>
            <td>Service</td>
            <td>Standorte</td>
            <td>Kontakt</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>News</td>
            <td>Orientierung & Gesundheit</td>
            <td>Stellenangebote</td>
            <td>Alle Standorte</td>
            <td>03831 23-2417</td>
        </tr>
        <tr>
            <td>Termine</td>
            <td>Vorbereitung</td>
            <td>Presse</td>
            <td>Stralsund</td>
            <td>info@bfw-stralsund.de</td>
        </tr>
        <tr>
            <td></td>
            <td>Qualifizierung</td>
            <td>Downloads</td>
            <td>Rostock</td>
            <td>Termin vereinbaren</td>
        </tr>
        <tr>
            <td></td>
            <td>Training & Integration</td>
            <td>Menüvorwahlsystem</td>
            <td>Schwerin</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Referenzen</td>
            <td>Waren</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Kontakte</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Glossar</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</Table>
          </div>
        </div>
      );

}
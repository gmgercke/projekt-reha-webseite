import React from "react";
import "./NutzerMain.css";
import plan from "./Stundenplan.png";


export default function NutzerMain() {
    return (
        <div className="NutzerMain">
<div class="uebersicht-table">
    <h3>Angemeldet als: Maxi Mustermensch</h3>
              <table>
                <tr>
                  <td>
                  <div class="uebersicht">
        <h4 class="beschreibung-ue">Übersicht</h4>
      <div class="nutzernav">
        <ul>
            <li>Noten</li>
            <li class="uebersicht-highlight">Stundenplan</li>
            <li>Termine</li>
            <li>Präsentationen</li>
            <li>Lernmaterialien</li>
            <li>Pers. Speicherplatz</li>
            <li>Wichtige Dokumente</li>
            <li>Fahrkosten</li>
            <li>Internatsverwaltung</li>
        </ul>
      </div>
      </div>
    </td>
    <td><div class="uebersicht">
        <h4 class="beschreibung-ue">Übersicht</h4>
      <div class="nutzernav">
        <img src={plan} alt="Stundenplan" class="stundenplan"/>
      </div>
      </div>
    </td>
    </tr>
    </table>
    </div>
        </div>

    );
}
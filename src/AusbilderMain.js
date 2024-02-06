import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./AusbilderMain.css";
import "./darkmode.css";


export default function AusbilderMain() {
    const [selectedKlasse, setSelectedKlasse] = useState('IT23');
    const [selectedTeilnehmer, setSelectedTeilnehmer] = useState('Maxi Mustermensch');
    const [selectedFach, setSelectedFach] = useState('Rechnungswesen');
    const [selectedNote, setSelectedNote] = useState('1');
    return (
      <div className="AusbilderMain">
<div class="uebersicht-table">
    <h3>Angemeldet als: Frank Ausbilderus</h3>
              <table>
                <tr>
                  <td>
                  <div class="uebersicht">
        <h4 class="beschreibung-ue">Übersicht</h4>
      <div class="nutzernav">
        <ul>
            <li>Meine Klassen</li>
            <li class="uebersicht-highlight">Notenvergabe</li>
            <li>Stundenplan</li>
            <li>Termine</li>
            <li>Pers. Speicherplatz</li>
            <li>Präsentationen Teilen</li>
            <li>Lernmaterialien Teilen</li>
            <li>Wichtige Dokumente</li>
        </ul>
      </div>
      </div>
    </td>
    <td><div class="uebersicht">
        <h4 class="beschreibung-ue">Übersicht</h4>
        <div class="noten-header">
            In dieser Auswahl können Sie Noten an bestimmte Teilenhmer vergeben. Wählen Sie dazu die Klasse, den Teilnehmer, das Fach und dann die Note aus.
        </div><br></br>
      <div class="nutzernav">
        <label>
            Wähle die Klasse: 
      <select value={selectedKlasse} onChange={e => setSelectedKlasse(e.target.value)} class="selectMenu">
        <option value="IT23">Klasse IT23</option>
        <option value="IT22">Klasse IT22</option>
        <option value="Sofa">Klasse SoFa</option>
    </select>
    </label>
    <hr />
      <div>
      <label>
      Für <span class="auswahl-highlight">{selectedKlasse}</span> existieren folgende Teilnehmer:
      <select value={selectedTeilnehmer} onChange={e => setSelectedTeilnehmer(e.target.value)} class="selectMenu">
        <option value="Maxi Mustermensch">Maxi Mustermensch</option>
        <option value="Fritzi Fehlzeit">Fritzi Fehlzeit</option>
        <option value="Willi Weißalles">Willi Weißalles</option>
    </select>
    </label>
    </div>
    <hr />
      <div>
      <label>
      Für <span class="auswahl-highlight">{selectedTeilnehmer}</span> existieren folgende Fächer:
      <select value={selectedFach} onChange={e => setSelectedFach(e.target.value)} class="selectMenu">
        <option value="Rechnungswesen">Rechnungswesen</option>
        <option value="Softwareentwicklung">Softwareentwicklung</option>
        <option value="Vernetzte IT-Systeme">Vernetzte IT-Systeme</option>
    </select>
    </label>
    </div>
    <hr />
      <div>
      <label>
      Wähle die entsprechende Note für <span class="auswahl-highlight">{selectedFach}</span>:
      <select value={selectedNote} onChange={e => setSelectedNote(e.target.value)} class="selectMenu">
        <option value="1">1 - Sehr Gut</option>
        <option value="2">2 - Gut</option>
        <option value="3">3 - Befriedigend</option>
        <option value="4">4 - Ausreichend</option>
        <option value="5">5 - Mangelhaft</option>
        <option value="6">6 - Ungenügend</option>
    </select>
    </label>
    <br></br>
    <br></br>
    <Button variant="primary" type="submit">
      Eintragen
      </Button>
    <br></br>
    <br></br>
    <span class="auswahl-highlight">Sie Haben die Note {selectedNote} im Fach {selectedFach} für Teilnehmer {selectedTeilnehmer} aus der Klasse {selectedKlasse} eingetragen.</span>
    </div>
      </div>
      </div>
    </td>
    </tr>
    </table>
    </div>
        </div>
    );
}
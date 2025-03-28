import "./assets/App.css";
import React from "react";
import { useState } from "react";
import Note from "./pt2/components/Note";
import PersonaAdd from "./pt2/components/PersonaAdd";
import FilterPersona from "./pt2/components/FilterPersona";
import PersonaAll from "./pt2/components/PersonaAll";

const App = () => {
  const [personas, setPersonas] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    { name: "Edison Crespo", number: "39-23-6423122", id: 5 },
    { name: "Alex Garcia", number: "39-23-6423122", id: 6 },
    { name: "Maria Love", number: "39-23-6423122", id: 7 },
    { name: "Daniel Crespo", number: "39-23-6423122", id: 8 },
  ]);

  return (
    <div>
      <h1>Agencia telefonica</h1>
      <PersonaAdd personas={personas} setPersonas={setPersonas} />
      <FilterPersona personas={personas} />
      <PersonaAll personas={personas} />
    </div>
  );
};

export default App;

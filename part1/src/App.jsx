import "./assets/App.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [personas, setPersonas] = useState([]);

  const responseNote = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersonas(response.data);
    });
  };
  useEffect(responseNote, []);
  return (
    <div>
      <h1>Agencia telefonica</h1>
      <p>N* Contactos: {personas.length}</p>
      {personas.map((persona, i) => (
        <p key={persona.id}>
          N* {i} : {persona.name} Numero telefono: {persona.number}
        </p>
      ))}
    </div>
  );
};

export default App;

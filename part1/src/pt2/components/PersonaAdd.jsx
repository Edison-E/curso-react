import React from "react";
import { useState } from "react";

const PersonaAdd = ({personas, setPersonas}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };
  const getNumber = (event) => {
    setNumber(event.target.value);
  };
  const addPersona = (event) => {
    event.preventDefault();

    const personaExist = personas.find((persona) => persona.name === name);
    console.log(personaExist);

    if (personaExist) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    const personaObject = {
      name: name,
      number: number,
      id: personas.length + 1,
    };

    setPersonas(personas.concat(personaObject));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={addPersona}>
        <legend>Nuevo contacto</legend>
        <input value={name} onChange={getName} />
        <br />
        <input value={number} onChange={getNumber} />
        <br />
        <br />
        <button type="submt">add</button>
      </form>
    </div>
  );
};

export default PersonaAdd;

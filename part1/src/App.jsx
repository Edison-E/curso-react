import "./assets/App.css";
import React from "react";
import { useState, useEffect } from "react";
import PersonsService from "./AgenciaTelefonica/service/PersonsService";
import Persons from "./AgenciaTelefonica/components/Persons";
import PersonsAdd from "./AgenciaTelefonica/components/PersonsAdd";

const App = () => {
  const [contactos, setContactos] = useState([]);

  const getPersons = () => {
    PersonsService.getAll().then((initialPersons) => {
      setContactos(initialPersons);
    });
  };

  useEffect(getPersons, []);
  return (
    <div>
      <h1>Agencia telefonica</h1>
      <Persons contactos={contactos} setContactos={setContactos} PersonsService={PersonsService} />
      <p>--------------------------------</p>
      <PersonsAdd
        PersonsService={PersonsService}
        contactos={contactos}
        setContactos={setContactos}
      />
    </div>
  );
};

export default App;
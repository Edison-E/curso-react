import React, { useState } from "react";

const PersonsAdd = ({ PersonsService, contactos, setContactos }) => {
  const [newName, setName] = useState("");
  const [newNumber, setNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();

    const existContact = contactos.find((x) => x.name === newName);

    if (existContact) {
      alert(`This contact ${newName} exist !!!`);
      setName("");
      setNumber("");
      return;
    }

    const newContact = {
      name: newName,
      number: newNumber,
    };

    PersonsService.create(newContact).then((response) => {
      console.log(response);
      setContactos(contactos.concat(response));
      setName("");
      setNumber("");
    });
  };

  return (
    <div>
      <h4>Add new contact</h4>
      <form onSubmit={addContact}>
        <p>
          Name
          <input
            type="text"
            value={newName}
            onChange={(event) => setName(event.target.value)}
          />
        </p>
        <p>
          Number
          <input
            type="text"
            value={newNumber}
            onChange={(event) => setNumber(event.target.value)}
          />
        </p>
        <br />
        <button type="submit">save contact</button>
      </form>
    </div>
  );
};

export default PersonsAdd;

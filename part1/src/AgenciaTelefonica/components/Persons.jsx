import React from "react";
import PersonsDelete from "./PersonsDelete";
const Persons = ({ contactos, setContactos, PersonsService }) => {
  return (
    <div>
      <h4>View all persons</h4>
      {contactos.map((contact) => (
        <p key={contact.id}>
          Name {contact.name} | Number {contact.number}
          {
            <PersonsDelete
              id={contact.id}
              contactos={contactos}
              setContactos={setContactos}
              PersonsService={PersonsService}
            />
          }
        </p>
      ))}
    </div>
  );
};

export default Persons;
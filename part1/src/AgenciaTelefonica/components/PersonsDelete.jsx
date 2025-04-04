import React from "react";

const PersonsDelete = ({ id, contactos, setContactos, PersonsService }) => {
  const deleteContact = (id) => {
    const contact = contactos.find((x) => x.id === id);

    console.log(contact);
    if (!contact) {
      alert("This contacto not exist!!!");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${contact.name}?`
    );
    if (confirmDelete) {
      PersonsService.remove(id)
        .then(() => {
          setContactos(contactos.filter((x) => x.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting contact:", error);
          alert("There was an error deleting the contact.");
        });
    }
  };
  return <button onClick={() => deleteContact(id)}>Delete 🗑️</button>;
};

export default PersonsDelete;
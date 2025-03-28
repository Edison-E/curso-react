import React from "react";

const PersonaAll = ({ personas }) => {
  return (
    <div>
      <h4>Todos los contactos</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.name}</td>
              <td>{persona.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonaAll;

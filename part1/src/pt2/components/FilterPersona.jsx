import React from "react";
import { useState } from "react";

const FilterPersonas = ({ personas }) => {
  const [filterName, setFilterName] = useState("");

  const getFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const personasToShow = filterName
    ? personas.filter((persona) =>
        persona.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : personas;

  return (
    <div>
      <h4>Show for name</h4>
      <input value={filterName} onChange={getFilterName} />
      {personasToShow.map((persona) => (
        <p key={persona.id}>{persona.name}</p>
      ))}
    </div>
  );
};

export default FilterPersonas;

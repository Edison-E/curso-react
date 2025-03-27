import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} ejercicio={part.exercises} />
      ))}
      <p>total of {total} exercises</p>
    </div>
  );
};

export default Content;

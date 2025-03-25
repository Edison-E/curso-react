import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <h2>Exercises</h2>
      <Part name={props.parts[0].name} score={props.parts[0].exercises} />
      <Part name={props.parts[1].name} score={props.parts[1].exercises} />
      <Part name={props.parts[2].name} score={props.parts[2].exercises} />
    </div>
  );
};

export default Content;

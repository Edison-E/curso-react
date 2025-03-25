import React from "react";

const Total = (props) => {
  return (
    <div>
      <h2>Total</h2>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  );
};

export default Total;

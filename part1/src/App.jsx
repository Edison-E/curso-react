import "./assets/App.css";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
import Hello from "./Hello";
import { useState } from "react";

const App = () => {
  const [counter = 0, setCounter] = useState(0);
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const name = "Edison";
  const age = 23;

  const handleClick = () => setCounter(counter + 1);
  const resetClicks = () => setCounter(counter == 0);

  return (
    <div>
      <Header course={course.name} />
      <Hello name={name} age={age} />

      <div>
        <button onClick={handleClick}>Plus</button>
        <button onClick={resetClicks}>Reset</button>
        <div>{counter}</div>
      </div>

      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

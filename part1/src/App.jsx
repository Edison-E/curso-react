import "./assets/App.css";
import React from "react";
import { useState } from "react";
import Button from "./2/Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  //const [anecdoteUp, setAnecdote] = useState(0);

  const randomAnecdotes = () => {
    const id = Math.floor(Math.random() * anecdotes.length);

    setSelected(id);
  };

  const addVoteAnecdotes = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
  };

  const maxIndiceVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <br />
      <Button text="next anecdote" event={randomAnecdotes} />
      <Button text="vote" event={addVoteAnecdotes} />

      <h1>Anecdote mayor</h1>
      {Math.max(...votes) > 0 ? (
        <div>
          <p>{anecdotes[maxIndiceVotes]}</p>
          <p>Has {votes[maxIndiceVotes]} votes</p>
        </div>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;
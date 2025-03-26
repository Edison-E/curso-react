import React from "react";

const StatisticsLine = ({ text, score }) => {
  if (text === "Average") {
    return (
      <tr>
        <td>{text}➟</td>
        <td>{score.toFixed(1)}</td>
      </tr>
    );
  }
  return (
    <div>
        <tr>
          <td>{text}➟</td>
          <td>{score}</td>
        </tr>
    </div>
  );
};

export default StatisticsLine;

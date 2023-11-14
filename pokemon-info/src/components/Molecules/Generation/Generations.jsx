import React from "react";
import "./Generations.css"

export const Generations = (props) => {
  const generations = props.generations;
  return (
    <>
      <h2>Generation Names:</h2>
      <ul className="list-generations">
        {generations.map((generation, index) => (
          <li key={index}>{generation.name}</li>
        ))}
      </ul>
    </>
  );
};

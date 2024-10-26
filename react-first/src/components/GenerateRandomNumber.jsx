import { useState } from "react";

export const GenerateRandomNumber = () => {
  const [randomNumber, setNewRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateNewNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);

    setNewRandomNumber(newNumber);
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateNewNumber}>GenerateNewNumber</button>
    </div>
  );
};

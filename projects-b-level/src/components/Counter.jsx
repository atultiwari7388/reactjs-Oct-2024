import { useState } from "react";
import "../style.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>

      <div className="btns-container">
        <div onClick={increment} className="increment">
          +
        </div>
        <div onClick={decrement} className="decrement">
          -
        </div>
      </div>
    </div>
  );
};

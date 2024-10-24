import { useState } from "react";

export default function IncDec() {
  const [num, setNum] = useState(10);

  const IncButton = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const DecButton = () => {
    setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : 0));
  };

  return (
    <div>
      <h2>Number is {num}</h2>
      <button onClick={IncButton}>Inc</button>
      <button onClick={DecButton}>Dec</button>
    </div>
  );
}

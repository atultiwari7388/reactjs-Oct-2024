import { useState } from "react";
import IncDec from "./components/IncDec";

export default function App() {
  const [user, setUser] = useState("Aryan");

  const changeUserBtn = () => {
    console.log("Change");
    setUser("Kalua");
  };

  return (
    <div>
      <h1>Hello my name is {user}</h1>
      <button style={buttonStyle} onClick={changeUserBtn}>
        Change User
      </button>
      <IncDec />
    </div>
  );
}

const buttonStyle = {
  color: "blue",
  backgroundColor: "lightseagreen",
  padding: "5px 10px",
  margin: "10px 20px",
};

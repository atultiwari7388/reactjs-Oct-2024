import { useState } from "react";
import IncDec from "./components/IncDec";
import { FormComponent } from "./components/Form";

export default function App() {
  const [user, setUser] = useState("Darling");

  const changeUserBtn = () => {
    console.log("Change");
    setUser("Kalua");
  };

  return (
    <div>
      <h1>Hello my name is {user}</h1>
      <button
        className="rounded-md bg-red-600 py-2 px-2 mt-2 text-white"
        onClick={changeUserBtn}
      >
        Change User
      </button>
      <IncDec />
      <FormComponent />
    </div>
  );
}

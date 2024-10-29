// import { useState } from "react";
// import { UpdateArray } from "./../components/UpdateArray";
// import UpdateObject from "./../components/UpdateObject";
import { UserProfile } from "../components/UserProfile";
import { UserProvider } from "../UserContext";
import { UpdateArrayOfObject } from "./../components/UpdateArrayOfObject";

export const Contact = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);

  return (
    <UserProvider
      style={{
        margin: "0px",
        padding: "0px",
        height: "100vh",
        justifyItems: "center",
      }}
    >
      {/* <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>

      <UpdateArray />
      <UpdateObject /> */}
      {/* <UpdateArrayOfObject /> */}
      <UserProfile />
    </UserProvider>
  );
};

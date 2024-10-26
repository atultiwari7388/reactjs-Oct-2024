import { useState } from "react";

{
  /** Updating Array of content useState */
}

export const UpdateArray = () => {
  const [friend, setFriends] = useState(["Darling", "Vipin"]);

  const addOneFriend = () => setFriends([...friend, "Moti"]);

  const removeOneFriend = () => setFriends(friend.filter((f) => f !== "Vipin"));

  const updateOneFriend = () =>
    setFriends(friend.map((f) => (f === "Vipin" ? "Vipin Bhaiya" : f)));

  return (
    <div style={{ margin: "20px", padding: "20px" }}>
      {friend.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeOneFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </div>
  );
};

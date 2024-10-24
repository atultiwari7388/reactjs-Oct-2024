export default function App() {
  let user = "kalua";
  const age = 20;

  const changeUserBtn = () => {
    user = "Aryan";
    console.log(`Our New user is ${user}`);
  };

  return (
    <div>
      <h1>
        Hello my name is {user} and my age is {age}
      </h1>
      <button style={buttonStyle} onClick={changeUserBtn}>
        Change User
      </button>
    </div>
  );
}

const buttonStyle = {
  color: "blue",
  backgroundColor: "lightseagreen",
  padding: "5px 10px",
};

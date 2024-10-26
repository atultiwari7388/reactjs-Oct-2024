import { TodoList } from "./../components/TodoList";

export const Product = () => {
  // const [count, setCount] = useState(0);
  // const handleClick = () => setCount(count + 1);

  return (
    <div
      style={{
        margin: "0px",
        padding: "0px",
        height: "100vh",
        justifyItems: "center",
      }}
    >
      {/* <ComponentOne count={count} handleClick={handleClick} /> */}
      {/* <GenerateRandomNumber /> */}
      {/* <LocalStorageEx /> */}
      <TodoList />
    </div>
  );
};

const ComponentOne = ({ count, handleClick }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default ComponentOne;

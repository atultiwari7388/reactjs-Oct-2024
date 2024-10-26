export const StyleCard = () => {
  const headerStyling = {
    color: "white",
    backgroundColor: "red",
    padding: "2rem",
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "black", padding: "2rem" }}>
        Inline Style
      </h1>
      <h1 style={headerStyling}>StyleCardTwo</h1>
    </div>
  );
};

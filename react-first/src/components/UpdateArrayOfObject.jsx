import { useState } from "react";

export const UpdateArrayOfObject = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Kalua Bna Hero", rating: 1 },
    { id: 2, title: "Kalua Chor", rating: 1 },
    { id: 3, title: "Badass Ravikumar", rating: 1 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "Kalua 2" } : m))
    );
  };

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

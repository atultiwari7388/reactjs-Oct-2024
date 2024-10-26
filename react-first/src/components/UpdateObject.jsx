import { useState } from "react";

{
  /** Updating Object */
}

const UpdateObject = () => {
  const [movies, setMovie] = useState({ title: "Soorya", rating: 7 });

  const handleClick = () => {
    //   const copyMovie = {
    //     ...movies,
    //     rating: 5,
    //   };

    setMovie({ ...movies, rating: 5 });
  };

  return (
    <div>
      <h1>Title: {movies.title}</h1>
      <p>Rating: {movies.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
};
export default UpdateObject;

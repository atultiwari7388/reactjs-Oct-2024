export const Copy = () => {
  const copyHandler = () => {
    console.log("Stop Stealing my content");
  };

  return (
    <p onClick={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda
      aspernatur corrupti nesciunt harum omnis magnam tempore laboriosam alias
      quod, iure voluptates fugiat dolor sed architecto nihil expedita quibusdam
      odio.
    </p>
  );
};

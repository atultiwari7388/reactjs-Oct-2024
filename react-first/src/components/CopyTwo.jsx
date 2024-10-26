export const CopyTwo = () => {
  function moveHandler() {
    alert("Mouse move event fired");
  }

  return (
    <p onClick={moveHandler} style={{ margin: "20px", padding: "20px" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda
      aspernatur corrupti nesciunt harum omnis magnam tempore laboriosam alias
      quod, iure voluptates fugiat dolor sed architecto nihil expedita quibusdam
      odio.
    </p>
  );
};

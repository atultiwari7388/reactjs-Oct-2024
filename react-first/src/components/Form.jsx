export const FormComponent = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        className="px-4 py-3 rounded border m-2"
        type="text"
        placeholder="Enter your name"
      />
      <button className="px-4 py-3 font-semibold bg-cyan-400 text-white rounded m-2">
        Submit
      </button>
    </form>
  );
};

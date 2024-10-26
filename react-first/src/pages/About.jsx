import "../index.css";
import { EventButton } from "./../components/EventButton";
import { Copy } from "./../components/Copy";
import { CopyTwo } from "./../components/CopyTwo";

export const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          margin: "20px",
          borderRadius: "10px",
          color: "darkblue",
        }}
      >
        <h1>Style Card</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          velit, nemo qui consequuntur quo repellendus laudantium libero
          suscipit fugiat. Voluptas!
        </p>
      </div>
      <EventButton />
      <Copy />
      <CopyTwo />
    </div>
  );
};

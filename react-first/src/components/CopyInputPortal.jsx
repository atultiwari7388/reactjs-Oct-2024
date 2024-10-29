import { useState } from "react";
import { PopupMsg } from "./PopupMsg";

export const CopyInputPortal = () => {
  const [inputValue, setInputValue] = useState("");

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        name="value"
        id="1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupMsg copied={copied} />
    </div>
  );
};

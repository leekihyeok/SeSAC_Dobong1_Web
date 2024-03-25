import { useState } from "react";

export default function HanderEx() {
  const [text, setText] = useState("Hello World!");
  function changeText() {
    setText("Goodbye World!");
  }
  return (
    <div>
      <div>{text}</div>
      <button onClick={changeText}>클릭</button>
    </div>
  );
}

import { useState } from "react";

export function HandlerEx2() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색");
  function changeRed() {
    setColor("red");
    setText("빨간색");
  }
  function changeBlue() {
    setColor("blue");
    setText("파란색");
  }
  return (
    <div>
      <h3 style={{ color: color }}>{text} 글씨</h3>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
export default HandlerEx2;

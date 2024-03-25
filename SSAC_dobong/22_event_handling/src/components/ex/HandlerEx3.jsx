import { useState } from "react";
import apple from "../ex/img/apple.jpg";
import bananas from "../ex/img/bananas.jpg";
import grapes from "../ex/img/grapes.jpg";
import peaches from "../ex/img/peaches.jpg";

function HandlerEx3() {
  const [img, setImg] = useState(apple);
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("black");
  const [text, setText] = useState("text");

  function changeImg(e) {
    switch (e.target.value) {
      case "bananas":
        setImg(bananas);
        break;

      case "grapes":
        setImg(grapes);
        break;

      case "peaches":
        setImg(peaches);
        break;

      default:
        setImg(apple);
        break;
    }
  }

  function changeBgColor(e) {
    setBgColor(e.target.value);
  }

  function changeColor(e) {
    setColor(e.target.value);
  }

  function changeText(e) {
    setText(e.target.value);
  }

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          changeImg(e);
        }}
      >
        <option value="apple">사과</option>
        <option value="bananas">바나나</option>
        <option value="grapes">포도</option>
        <option value="peaches">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          changeBgColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          changeColor(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <label>
        내용 :<input type="text" onChange={changeText} />
      </label>
      <br />
      <img src={img} alt="과일 이미지" style={{ width: "200px" }} />
      <p style={{ backgroundColor: bgColor, color: color, width: "200px" }}>
        {text}
      </p>
    </>
  );
}

export default HandlerEx3;

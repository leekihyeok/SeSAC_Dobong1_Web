import React, { useState, useRef } from "react";

export default function Practice02() {
  const [colorName, setColorName] = useState("");
  const containerRef = useRef();
  const inputRef = useRef();

  const applyColor = () => {
    if (colorName.trim() === "") {
      return; // 빈 값인 경우 아무 동작도 하지 않음
    }

    const color = colorName.toLowerCase();
    containerRef.current.style.backgroundColor = color;
    inputRef.current.value = ""; // 입력 창 초기화
    inputRef.current.focus(); // 입력 창 자동 포커스
  };

  return (
    <div ref={containerRef} style={{ padding: "10px" }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="색상 이름을 입력하세요"
        onChange={(e) => setColorName(e.target.value)}
      />
      <button onClick={applyColor}>색 적용</button>
    </div>
  );
}

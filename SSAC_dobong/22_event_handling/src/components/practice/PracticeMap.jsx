import { useState } from "react";

export default function PracticeMap() {
  const [list, setList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const addInput = () => {
    if (inputName.trim().length == 0) return;
    const newInput = list.concat({
      name: inputName,
      email: inputEmail,
    });

    setList(newInput);
    setInputName("");
    setInputEmail("");
  };
  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      addInput();
    }
  };
  const deleteInput = (name) => {
    console.log(name); // id 확인
    const newInput = list.filter((value) => value.name !== name);
    setList(newInput);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input
        type="text"
        placeholder="email을 입력해주세요"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputEmail}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addInput}>등록</button>
      {list?.map((el) => {
        return (
          <p
            key={el.name}
            onDoubleClick={() => {
              deleteInput(el.name);
            }}
          >
            {el.name}: {el.email}
          </p>
        );
      })}
    </div>
  );
}

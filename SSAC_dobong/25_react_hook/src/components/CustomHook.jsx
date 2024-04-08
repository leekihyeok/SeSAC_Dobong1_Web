import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  //  custom hook 없이 진행
  //   const [isOpen, setIsOpen] = useState(true);

  //  custom hook으로 useToggle 제작
  const [isOpen, setIsOpen] = useToggle(true);
  return (
    <>
      <h3>Custom Hook</h3>
      <div onClick={setIsOpen}>
        Q. 리액트에서 커스텀 훅 만들 수 있나요??????
      </div>
      {isOpen && <div>A. 네!!</div>}
    </>
  );
}

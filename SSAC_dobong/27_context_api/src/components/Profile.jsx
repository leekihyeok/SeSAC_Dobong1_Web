import { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { AgeContext } from "../contexts/AgeContext";

export default function Profile() {
  //   const nameContext = useContext(UserContext);
  //   const ageContext = useContext(AgeContext);
  const { name, setName } = useContext(UserContext);
  console.log(name);
  const { age, setAge } = useContext(AgeContext);

  const nameref = useRef();
  const ageref = useRef();

  const changeInfo = () => {
    setName(nameref.current.value);
    setAge(ageref.current.value);
  };
  return (
    <>
      <h4>사용자 프로필</h4>
      <p>이름: {name}</p>
      <p>나이: {age}</p>

      <input type="text" placeholder="이름 입력" ref={nameref} />
      <input type="number" placeholder="나이 입력" ref={ageref} />
      <br />
      <button onClick={changeInfo}>바꾸기</button>
    </>
  );
}

import { useRef } from "react";

export default function Practice03() {
  // 1. input 태그를 직접 선택하기 위해 ref 객체 생성(useRef 이용)
  const answerRef = useRef();
  const operator = ["X", "+", "-"];

  /* 
  Math.random()을 사용해서 랜덤한 연산자 3개 & 랜덤한 수 0~10 을 만들어야 합니다. 
  */
  // operator 배열에서 무작위로 연산자를 가지고 오기 위한 index
  const idx = Math.floor(Math.random() * 3); //0,1,2
  const num1 = Math.floor(Math.random() * 11); // 0 ~ 10
  const num2 = Math.floor(Math.random() * 11); // 0 ~ 10
  //   연산결과 담아두기
  let result;

  // idx는 랜덤한 숫자0,1,2 이므로
  // operator[idx]는 X,+,- 중 무작위로 한가지가 나옵니다.
  switch (operator[idx]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "X":
      result = num1 * num2;
      break;
    default:
      return;
  }

  function checkAnswer() {
    // 3. input 태그의 value로 작성한 글자를 가져오기 위해서는 ref의 current 를 확인
    // answerRef.current : <input type="text" />
    // answerRef.current.value: input 태그에 작성한 글자를 가져올 수 있다.
    // answerRef.current.[input 태그의 속성] 으로 접근
    if (Number(answerRef.current.value) === result) {
      alert("정답입니다.🥳");
      // 만약 정답일 때 다음문제로 넘어가게 하고 싶다면 state를 이용해서 재렌더링 시키면 됩니다.
      // 단순히 문제가 틀렸는지 맞았는지 확인할 때는 state값이 필요 없어요!
    } else {
      alert(`틀렸어요. 😥 정답은 ${result} 입니다.`);
    }
    answerRef.current.value = "";
    answerRef.current.focus();
  }
  return (
    <div>
      <span style={{ fontSize: "25px" }}>
        {num1} {operator[idx]} {num2}
      </span>
      <br></br>
      {/* 2. input 태그를 직접 선택하기 위한 answerRef 부여 */}
      <input type="text" ref={answerRef} />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}

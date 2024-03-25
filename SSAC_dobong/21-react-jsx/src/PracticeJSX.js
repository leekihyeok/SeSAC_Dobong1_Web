// 함수형 컴포넌트import ClassComp from "./ClassComp";
export default function PracticeJSX() {
  const name = "코코";
  const animal = "고양이";
  function add(a, b) {
    return a + b;
  }
  const a = 8;
  const b = 5;
  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}</h2>
      <p>
        {name}은 {animal}입니다
      </p>
      <p>{3 + 5 === 8 ? "정답입니다" : "오답입니다"}</p>
      <p>{a > b && "a가 b보다 큽니다"}</p>
      <div className="login">
        <h1 className="title">Hello World</h1>
        <label htmlFor="" className="input">
          아이디
          <input type="text" />
        </label>
        <br />
        <label htmlFor="" className="input">
          비밀번호
          <input type="password" />
        </label>
      </div>
    </div>
  );
}

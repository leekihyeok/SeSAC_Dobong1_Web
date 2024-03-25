import ClassComp from "./ClassComp";
export default function UseJSX() {
  //   인라인 스타일 적용하기
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gray",
  //     textAlign: "center",
  //     color: "#fff",
  //     marginTop: "0.5rem",
  //     display: "inline-block",
  //     border: "1px solid red",
  //   };
  //   return (
  //     <div>
  //       <div style={{ color: "#fff", width: "100px", backgroundColor: "tomato" }}>
  //         first
  //       </div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //       <div style={divStyle}>fourth</div>
  //     </div>
  //   );
  // 2. js 문법 사용
  let isShow = false;
  function myFunc() {
    alert("안녕하세요 잘가세요 눈물나여");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("놀렸습니다");
        }}
      >
        {isShow ? "true 일 때 보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>
        {isShow && "true 일 때 보임"}
      </div>
      <div style={{ backgroundColor: "purple" }} onClick={myFunc}>
        {isShow === false ? "isShow 가 false 이군요" : "isShow 가 true 이군요"}
      </div>
      <div style={{ backgroundColor: "navy" }}>
        {!isShow && "false 일 때 보임"}
      </div>
      <div style={{ backgroundColor: "blue" }}></div>
      <div
        onClick={() => {
          addNum(8, 5);
        }}
      >
        8 더하기 5의 결과를 alert로 확인해보아요
      </div>
      <br />
      <br />
      <ClassComp />
      <br />
      <hr />
      <div className="div"></div>
    </div>
  );
}

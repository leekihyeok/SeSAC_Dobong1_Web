import "../styles/SassComponent.scss";
import img1 from "../assets/sunny.png";

export default function Sass() {
  return (
    <>
      <h4>sass 사용</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BTN1</button>
        <button className="btn btn--opacity">BTN2</button>
        <button className="btn btn--blue">BTN3</button>
      </div>

      {/* mixin, for, if, each */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <br />
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <br />
        <div className="box2">hi1</div>
        <div className="box2">hi2</div>
        <div className="box2">hi3</div>
        <div className="box2">hi4</div>
      </div>

      <h2>이미지 가지고 오기</h2>
      <h4>1. src 폴더 내부에 이미지 저장</h4>
      <h5>상대경로로 불러오기</h5>
      <img
        // src="../assets/sunny.png"
        alt="src내부에 이미지가 있을 때는 경로명으로 접근할 수 없습니다"
      />
      <h5>이미지 import해서 가지고 오기</h5>
      <img src={img1} alt="import 후 가지고오기" style={{ width: "100px" }} />
      <h5>css파일에서 이미지 접근(background)</h5>
      <div className="src-image img-test"></div>

      <h4>2. public 폴더 내부에 이미지 저장</h4>
      <h5>img 태그 사용하기</h5>
      <img
        src={process.env.PUBLIC_URL + "/assets/sunny.png"}
        alt=""
        style={{ width: "100px" }}
      />
      <img src="" alt="" />
      <h5>css파일에서 이미지 접근(background)</h5>
      <div className="img-test public-image"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>이미지 가져오기</h2>
      <div className="boxContainer">
        <div className="imgBox"></div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
        <div className="imgBox"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

import "../practice/styles/Worm.scss";
import grass from "./grass.png";

function WormComponent() {
  return (
    <>
      <div className="container">
        <div className="circle circle1"></div>
        <div className="eye"></div>
        <div className="eye1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <img className="weed" src={grass} width="100%" />
      </div>
    </>
  );
}

export default WormComponent;

import React from "react";

export class RefClass1 extends React.Component {
  render() {
    return (
      <>
        <p>버튼 클릭시 input 창에 focus 처리 (callback 사용)</p>
        <input type="text" />
        <button>focus</button>
      </>
    );
  }
}
export class RefClass2 extends React.Component {
  render() {
    return (
      <>
        <p>버튼 클릭시 input 창에 focus 처리 (createRef()사용)</p>
        <input type="text" />
        <button>focus</button>
      </>
    );
  }
}

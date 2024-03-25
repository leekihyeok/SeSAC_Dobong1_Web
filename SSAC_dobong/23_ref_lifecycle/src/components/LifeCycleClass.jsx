import { Component } from "react";

class MyComponent extends Component {
  // mount 되었을 때
  componentDidMount() {
    console.log("clas component, mount!!!");
  }
  // update 되었을 때
  componentDidUpdate() {
    console.log("clas component, update!!!");
  }
  // unmount 예정일 때
  componentWillUnmount() {
    console.log("clas component, unmount!!!");
  }

  render() {
    return <p>My Component {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => this.setState({ number: this.state.number + 1 });
  changeVisibleState = () => this.setState({ visible: !this.state.visible });
  
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;

import Practice01 from "./components/practice/Practice01";
import Practice02 from "./components/practice/Practice02";
import Practice03 from "./components/practice/Practice03";
import Practice04 from "./components/practice/Practice04";
import Practice05 from "./components/practice/Practice05";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import Container from "./components/practice/Container";
function App() {
  return (
    <div className="App">
      {/* <h1>Ref</h1>
      <RefClass1></RefClass1>
      <RefClass2></RefClass2>
      <RefFunc1></RefFunc1>
      <RefFunc2></RefFunc2>
      <Practice01></Practice01>
      <Practice02></Practice02>
      <Practice03></Practice03> */}

      {/* <h1>life cycle</h1>
      <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunc></LifeCycleFunc>
      <Practice04></Practice04>
      <Practice05></Practice05> */}

      <Container>
        <Practice05></Practice05>
      </Container>
    </div>
  );
}

export default App;

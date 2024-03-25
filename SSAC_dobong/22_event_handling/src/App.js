import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import PororoObj from "./components/practice/PororoObj";
import PracticeState from "./components/practice/PracticeState";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import HandlerEx3 from "./components/ex/HandlerEx3";
import EntirePractice from "./components/ex/EntirePractice";
import PropsMap from "./components/PropsMap";
import Alphabet from "./components/Alphabet";
import PracticeMap from "./components/practice/PracticeMap";
import PracticeMapTable from "./components/practice/PracticeMapTable";
import PracticeMap2 from "./components/practice/PracticeMap2";

function App() {
  const dataArr = [
    { name: "peaches", number: 5, price: 5000 },
    { name: "apple", number: 1, price: 2000 },
    { name: "bananas", number: 10, price: 7000 },
    { name: "grapes", number: 7, price: 10000 },
  ];
  return (
    <div className="App">
      <h1>map과 filter 사용</h1>
      <PropsMap arr={dataArr}></PropsMap>
      <Alphabet></Alphabet>
      <PracticeMap></PracticeMap>
      <PracticeMapTable></PracticeMapTable>
      <h2>샘이 한 방법</h2>
      <PracticeMap2></PracticeMap2>
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={10000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>

      <h1>hello, state</h1>
      <ClassState />
      <FunctionState />

      <h1>연습문제</h1>
      <PracticeState></PracticeState>
      <PororoObj />

      <h1>이벤트 핸들러 연습문제</h1>
      <HandlerEx></HandlerEx>

      <HandlerEx2></HandlerEx2>

      <HandlerEx3></HandlerEx3>

      <h1 style={{ textAlign: "center" }}>entire practice</h1>
      <EntirePractice></EntirePractice> */}
    </div>
  );
}

export default App;

import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseCallBack from "./components/UseCallBack";
import UseCallBack2 from "./components/UseCallBack2";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";
import Form from "./components/UseForm";
import Practice01 from "./components/practice/Practice1";
function App() {
  useTitle("React Hook!");
  return (
    <>
      <h1>React Hook</h1>
      {/* <UseMemo></UseMemo>
      <UseMemoObj></UseMemoObj>
      <UseCallBack></UseCallBack>
      <UseCallBack2></UseCallBack2> */}
      {/* <UseReducer></UseReducer>
      <CustomHook></CustomHook> */}
      <Form></Form>
      <Practice01></Practice01>
    </>
  );
}

export default App;

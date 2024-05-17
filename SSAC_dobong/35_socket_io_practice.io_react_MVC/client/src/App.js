import Start from "./components/Start";
import Practice1 from "./components/Practice1";
import Chatting1 from "./components/Chatting1";
import Chatting2 from "./components/Chatting2";
import Chatting3 from "./components/Chatting3";
import "./styles/chat.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <h1>socket 사용해보기</h1>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      {/* <Chatting1 /> */}
      <Chatting3 />
    </div>
  );
}

export default App;

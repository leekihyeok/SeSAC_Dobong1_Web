import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";
// const MyLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;
function App() {
  return (
    <div className="App">
      {/* <MyLink>안녕하세요</MyLink> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

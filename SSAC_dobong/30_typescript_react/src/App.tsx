import React from "react";
import { Route, Routes } from "react-router-dom";
import HOME from "./Pages/Home";
import Lecture from "./Pages/Lecture";
import Practice from "./Pages/Practice";

function App() {
  return (
    <>
      <h1>typescript react</h1>
      <Routes>
        <Route path="/" element={<HOME></HOME>}></Route>
        <Route path="/lecture" element={<Lecture></Lecture>}></Route>
        <Route path="/practice" element={<Practice></Practice>}></Route>
      </Routes>
    </>
  );
}

export default App;

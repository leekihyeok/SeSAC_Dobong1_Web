import { ThemeContext } from "./contexts/ThemeContext";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { useState } from "react";
// import { AgeContext } from "./contexts/AgeContext";
// import { UserContext } from "./contexts/UserContext";
import AgeProvider from "./components/provider/AgeProvider";
import NameProvider from "./components/provider/NameProvider";
function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(20);

  return (
    <div className="App">
      <h1>context api</h1>
      <AgeProvider>
        <NameProvider>
          <Profile></Profile>
        </NameProvider>
      </AgeProvider>
    </div>
  );
}

export default App;

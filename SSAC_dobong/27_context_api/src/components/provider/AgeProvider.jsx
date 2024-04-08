import { AgeContext } from "../../contexts/AgeContext";
import { useState } from "react";

export default function AgeProvider(props) {
  const { children } = props;
  const [age, setAge] = useState(20);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
}

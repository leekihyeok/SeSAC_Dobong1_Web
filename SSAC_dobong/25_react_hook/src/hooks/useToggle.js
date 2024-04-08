import { useState } from "react";

export default function useToggle(initialVal = false) {
  const [val, setVal] = useState(initialVal);
  const toggleVal = () => setVal(!val);

  return [val, toggleVal];
}

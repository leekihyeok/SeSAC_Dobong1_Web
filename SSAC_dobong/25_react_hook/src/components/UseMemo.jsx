import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [input, setInputVal] = useState("");

  // before useMemo
  //   const calc = () => {
  //     console.log("calculate...");
  //     return count * 2;
  //   };

  // after useMemo
  const calc = useMemo(() => {
    console.log("calculate...");
    return count * 2;
  }, [count]);
  return (
    <>
      <h3>Use Memo</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      <p>{calc}</p>
    </>
  );
}

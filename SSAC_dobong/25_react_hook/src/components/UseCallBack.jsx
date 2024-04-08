import { useCallback, useEffect, useMemo, useState } from "react";

export default function UseCallBack() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  const func1 = () => {
    console.log(`number: ${number}S2`);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number}<>`);
  }, [number]);
  useEffect(() => {
    console.log("함수 1변경");
  }, [func1]);
  useEffect(() => {
    console.log("함수 2변경");
  }, [func2]);

  return (
    <>
      <h3>Use Call Back</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        Call function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </>
  );
}

import { useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  // useMemo 사용 전
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  // useMemo 사용 후
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 바뀔 때 마다 실행됩니다.");
  }, [location]);

  return (
    <>
      <h3>Use Memo Obj</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라 바꾸기</button>
    </>
  );
}

import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <Link to={"/"}>홈</Link>
      <Link to={"/practice"}>실습</Link>
    </>
  );
}

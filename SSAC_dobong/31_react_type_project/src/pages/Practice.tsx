import { Link } from "react-router-dom";
import HeaderMenu from "../components/Header";

export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <br />
      <Link to="/practice/matzip">맛집페이지</Link>
    </>
  );
}

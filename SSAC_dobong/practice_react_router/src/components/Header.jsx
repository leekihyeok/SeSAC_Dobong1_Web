import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
  const MyLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;
  const Ul = styled.ul`
    list-style: none;
    float: right;
  `;
  const Li = styled.li`
    float: left;
    margin: 4px;
  `;
  return (
    <div style={{ display: "flex", backgroundColor: "#EAF788" }}>
      <nav>
        <Ul>
          <Li>
            <MyLink to="/">홈으로</MyLink>
          </Li>
          <Li>
            <MyLink to="/student/rekey">학생</MyLink>
          </Li>
          <Li>
            <MyLink to="/student/codingon">코딩온</MyLink>
          </Li>
          <Li>
            <MyLink to="/student/new?name=rekey0108">query</MyLink>
          </Li>
        </Ul>
      </nav>
    </div>
  );
}

import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Student() {
  const { name } = useParams();
  const navigator = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const realName = searchParams.get("name");
  
  const Container = styled.div`
    background-color: #eaf788;
  `;

  const Student = styled.span`
    color: green;
    font-weight: bold;
  `;

  const Realname = styled.span`
    color: red;
    font-weight: bold;
  `;

  return (
    <Container>
      <div>
        학생의 이름은 <Student>{name}</Student> 입니다.
      </div>
      {realName && (
        <div>
          실제 이름은{" "}
          <Realname style={{ color: "red", fontWeight: "bold" }}>
            {realName}
          </Realname>
        </div>
      )}
      <button onClick={() => navigator(-1)}>이전 페이지로</button>
    </Container>
  );
}

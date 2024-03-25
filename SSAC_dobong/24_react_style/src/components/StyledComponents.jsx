import styled, { keyframes } from "styled-components";

export default function StyledComponents() {
  const ParentDiv = styled.div`
    background-color: #444;
  `;
  const H4Title = styled.h4`
    background-color: yellowgreen;
  `;
  const rotate = keyframes`
    0%{transform: rotate(0);}
    50%{
        transform:rotate(180deg);
        background-color: #fff;
    }
    100%{transform: rotate(360deg);}
  `;
  const Child = styled.span`
    color: ${(props) => (props.color ? props.color : "red")};
    &:hover {
      animation: ${rotate} 1s infinite linear;
      color: white;
      cursor: pointer;
    }
    /* 780px 이하이면서, 기기 방향이 세로인 */
    @media screen and (max-width: 780px) and (orientation: portrait) {
      font-size: 30px;
      color: green;
    }
    /* 780px 이하이면서, 기기 방향이 가로인 */
    @media screen and (max-width: 780px) and (orientation: landscape) {
      font-size: 40px;
      color: blue;
    }
  `;
  return (
    <>
      <H4Title>Styled Components 이용</H4Title>
      <ParentDiv>
        <Child color="blue">element1</Child>
        <Child>element2</Child>
        <Child>element3</Child>
      </ParentDiv>
    </>
  );
}

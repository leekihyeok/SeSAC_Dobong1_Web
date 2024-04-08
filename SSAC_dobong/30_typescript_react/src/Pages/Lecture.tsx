import HeaderMenu from "../components/Header";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Container from "../components/lecture/Container";
import Text from "../components/lecture/Text";
import EventObj from "../components/lecture/EventObj";
import TodoList from "../components/lecture/TodoList";
import GenericList from "../components/lecture/GenericList";
export default function Lecture() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h2>수업코드</h2>
      <Container>
        <Props1 name="rekey"></Props1>
        <Props2 width="100px" height="100px" color="pink"></Props2>
        <Props3 width={100} height={100} text="Hello" color="yellow"></Props3>
        <Text></Text>
        <EventObj></EventObj>
        <TodoList></TodoList>
        <GenericList></GenericList>
      </Container>
    </>
  );
}

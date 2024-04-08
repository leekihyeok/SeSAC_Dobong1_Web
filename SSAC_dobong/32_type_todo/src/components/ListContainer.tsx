import TodoList from "./TodoList";
import DoneList from "./DoneList";

export default function ListContainer() {
  return (
    <div className="ListContainer">
      <TodoList></TodoList>
      <DoneList></DoneList>
    </div>
  );
}

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/module/todo";
import { done } from "../store/module/todo";
export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  //   console.log(list);

  const todoList = list.filter((li) => li.done === false);

  const dispatch = useDispatch();

  const todoRef = useRef();

  const nextID = useSelector((state) => state.todo.nextID);

  const createTodo = () => {
    // dispatch({
    //   type: "todo/CREATE",
    //   payload: { id: 3, text: todoRef.current.value },
    // });
    dispatch(create({ id: nextID, text: todoRef.current.value }));
    todoRef.current.value = "";
  };
  return (
    <section className="TodoList">
      <h2>오늘의 할 일</h2>
      <div>
        <input type="text" placeholder="Todo" ref={todoRef} />
        <button onClick={createTodo}>할 일 추가</button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => dispatch(done(todo.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

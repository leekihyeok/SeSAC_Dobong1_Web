import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/RootState";
import { create, done } from "../store/module/todo";

const TodoList: React.FC = () => {
  const list = useSelector((state: RootState) => state.todo.list);
  const todoList = list.filter((li) => li.done === false);

  const dispatch = useDispatch();

  const todoRef = useRef<HTMLInputElement>(null);

  const nextID = useSelector((state: RootState) => state.todo.nextID);

  const createTodo = () => {
    if (todoRef.current && todoRef.current.value.trim() !== "") {
      dispatch(create({ id: nextID, text: todoRef.current.value }));
      todoRef.current.value = "";
    }
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
};

export default TodoList;

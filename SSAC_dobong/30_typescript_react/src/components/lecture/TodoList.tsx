import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/interface";

export default function TodoList() {
  // Todo 리스트 전체를 담을 state(배열)
  const [todos, setTodos] = useState<Todo[]>([]);
  // 새로운 Todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updatedTodo);
      setTodos(updatedTodo);
      setNewTodo("");
      focusInput();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const ref = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // if (ref.current) {
    //   ref.current.focus();
    // }
    ref.current?.focus();
  };
  return (
    <div>
      <h4>Todo List</h4>
      <input
        type="text"
        placeholder="Todo ...."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={ref}
      />
      <button onClick={addTodo}>Add</button>
      <button>focus</button>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
            ></TodoItem>
          );
        })}
      </ul>

      <h4>done list</h4>
      <ul>
        {todos.map((todo) => {
          if (todo.done) {
            return <li key={todo.id}>{todo.text}</li>;
          }
        })}
      </ul>
    </div>
  );
}

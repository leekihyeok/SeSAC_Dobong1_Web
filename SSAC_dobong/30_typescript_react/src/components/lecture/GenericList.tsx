import { useState } from "react";
import { GTodo } from "../../types/interface";
import GenericItem from "./GenericItem";
export default function GenericList() {
  const [numberTodos, setNumberTodos] = useState<GTodo<number>[]>([]);
  const [stringTodos, setStringTodos] = useState<GTodo<string>[]>([]);

  const addNumberTodo = () => {
    setNumberTodos([...numberTodos, { id: Date.now(), text: 10, done: false }]);
    console.log(numberTodos);
  };
  const addStringTodo = () => {
    setStringTodos([
      ...stringTodos,
      { id: Date.now(), text: "문자열 추가", done: false },
    ]);
    console.log(stringTodos);
  };
  const toggleComplete = (id: number) => {
    setNumberTodos((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    });
    setStringTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div>
      <h4>number 추가</h4>
      <button onClick={addNumberTodo}>add number</button>
      <GenericItem toggle={toggleComplete} todos={numberTodos}></GenericItem>
      <h4>string 추가</h4>
      <button onClick={addStringTodo}>add string</button>
      <GenericItem toggle={toggleComplete} todos={stringTodos}></GenericItem>
    </div>
  );
}

import { Todo } from "../../types/interface";

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleComplete(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </label>
    </li>
  );
}

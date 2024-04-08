interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  list: TodoItem[];
  nextID: number;
}

const initialState: TodoState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "운동하기",
      done: false,
    },
    {
      id: 2,
      text: "저녁먹기",
      done: true,
    },
  ],
  nextID: 3,
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export const create = (payload: { id: number; text: string }) => ({
  type: CREATE,
  payload, // object { id, text }
});

export const done = (id: number) => ({
  type: DONE,
  id, // number
});

export function todoReducer(state: TodoState = initialState, action: any) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: state.nextID + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.id ? { ...item, done: true } : item
        ),
      };
    default:
      return state;
  }
}

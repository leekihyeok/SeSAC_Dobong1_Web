const initialState = 0;
const INCREAMENT = "count/INCREAMENT";
const DECREAMENT = "count/DECREAMENT";

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/INCREAMENT":
      return state + 1;
    case "count/DECREAMENT":
      return state - 1;
    default:
      return state;
  }
};
export const countMinus = () => {
  return { type: DECREAMENT };
};
export const countPlus = () => {
  return { type: INCREAMENT };
};

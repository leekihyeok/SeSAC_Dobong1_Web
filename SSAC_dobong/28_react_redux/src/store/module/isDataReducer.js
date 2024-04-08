const initialState = false;
const CHANGE = "isData/CHANGE";
export const isDataReducer = (state = initialState, action) => {
  if (action.type === "isData/CHANGE") {
    return !state;
  }
  return state;
};
export const isChange = () => {
  return { type: CHANGE };
};

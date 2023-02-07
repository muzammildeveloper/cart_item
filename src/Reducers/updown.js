const initialState = 0;

export const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }

  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;

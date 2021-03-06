import { createStore } from "redux";

const defaultCounterState = {
  counter: 0,
};

const counterReducer = (state = defaultCounterState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
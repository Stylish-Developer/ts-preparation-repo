import { useReducer } from "react";
import ChildReducer from "./ChildReducer";

type StateType = {
  count: number;
};

// initial and old type

// type actionType = {
//   type: string;
//   payload: number;
// };

//  we are going to strict more the types. new and more strict
type updatedAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};

export type actionType = updatedAction | resetAction;
//------------------------------------------------------------------------------
// -- initialState
const initialState = {
  count: 0,
};

// -- Reducer method
const reducer = (state: StateType, action: actionType) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - action.payload,
      };
    case "reset":
      return initialState;

    default:
      return state;
  }
};
// -- useReducer Hook
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Type for Reducer Hook </h3>
      <h1>count {state.count}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 1,
          })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }
      >
        decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        reset
      </button>
      <br />
      <p>child action component</p>
      <ChildReducer dispatch={dispatch}/>
    </>
  );
};

export default ReducerHook;

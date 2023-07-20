import ReducerHook from "./ReducerHook";
import StateHook from "./StateHook";

// -- type for hooks
const HooksType = () => {
  return (
    <>
      <h3>Type for React hook</h3>
      <p>note1:</p>
      <p>useState Hook</p>
      <StateHook />
      <p>useReducer Hook:</p>
      <ReducerHook />
    </>
  );
};

export default HooksType;

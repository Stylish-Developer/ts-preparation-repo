import ThemeProviderContext from "../context/ThemeProviderContext";
import UserContextProvider from "../context/UserContextProvider";
import Box from "./Box";
import ChildContext from "./ChildContext";
import ContextHook from "./ContextHook";
import ReducerHook from "./ReducerHook";
import StateHook from "./StateHook";
import UseRefHook from "./UseRefHook";

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
      <ContextHook />
      <ThemeProviderContext>
        <Box />
      </ThemeProviderContext>
      <UserContextProvider>
        <ChildContext />
      </UserContextProvider>
      <UseRefHook />
    </>
  );
};

export default HooksType;

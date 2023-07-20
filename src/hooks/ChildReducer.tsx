import { actionType } from "./ReducerHook";

type dispatchAction = {
  dispatch: React.Dispatch<actionType>;
};

const ChildReducer = ({ dispatch }: dispatchAction) => {
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 1,
          })
        }
      >
        {" "}
        ➕{" "}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }
      >
        {" "}
        ➖{" "}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        {" "}
        🔄{" "}
      </button>
    </>
  );
};

export default ChildReducer;

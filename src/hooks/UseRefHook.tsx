import { useEffect, useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      InputField: <input ref={inputRef} />
    </>
  );
};

export default UseRefHook;

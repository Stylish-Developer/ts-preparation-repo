import { useContext } from "react";
import { ThemeContext } from "../context/Context";

const Box = () => {
  const value = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: value.secondary.background,
        color: value.secondary.text,
      }}
    >
      theme box
    </div>
  );
};

export default Box;

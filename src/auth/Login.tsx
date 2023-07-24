import { useContext } from "react";
import { AuthContext } from "../context/Context";

const Login = () => {
  const value = useContext(AuthContext);
  return (
    <>
      <h3>Please login to continue</h3>
      <button onClick={value.handleLogin}>log in </button>
    </>
  );
};

export default Login;

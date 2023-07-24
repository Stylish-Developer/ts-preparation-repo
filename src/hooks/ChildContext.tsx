import { useContext } from "react";
import { userContext } from "../context/Context";

const ChildContext = () => {
  const value = useContext(userContext);

  const login = () => {
    value.setUser({
      name: "user1",
      email: "user@1.com",
    });
  };

  const logout = () => {
    value.setUser(null);
  };
  return (
    <>
      <button onClick={login}>log in</button>
      <button onClick={logout}>log out</button>
      <h4>
        user {value.user?.name} email {value.user?.email}
      </h4>
    </>
  );
};

export default ChildContext;

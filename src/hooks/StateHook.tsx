import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const StateHook = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "gautham",
      email: "test@outlook.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <h3>
        User: {user?.name} <br /> email: {user?.email}
      </h3>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default StateHook;

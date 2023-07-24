import { useState } from "react";
import { AuthContext } from "../context/Context";
import Private from "./Private";
import Profile from "./Profile";

export type AuthProps = {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

const AuthIndexFile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <h3>AuthIndexFile</h3>

      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        <Private component={Profile} />
      </AuthContext.Provider>
    </>
  );
};

export default AuthIndexFile;

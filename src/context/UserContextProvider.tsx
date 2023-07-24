import { useState } from "react";
import { userContext } from "./Context";

export type authUser = {
  name: string;
  email: string;
};

export type childrenProps = {
  children: React.ReactNode;
};

export type updatedAction = {
  user: authUser | null;
  setUser: React.Dispatch<React.SetStateAction<authUser | null>>;
};

const UserContextProvider = ({ children }: childrenProps) => {
  const [user, setUser] = useState<authUser | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;

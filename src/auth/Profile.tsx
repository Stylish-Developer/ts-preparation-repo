import { useContext } from "react";
import { AuthContext } from "../context/Context";

export type StringProp = {
  name: string;
};

const Profile: React.FC<StringProp> = ({ name }) => {
  const value = useContext(AuthContext);
  return (
    <>
      <div>Hello, {name}!</div>{" "}
      <button onClick={value.handleLogout}>log out </button>{" "}
    </>
  );
};

export default Profile;

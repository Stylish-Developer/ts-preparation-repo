import { useContext } from "react";
import Login from "./Login";
import { StringProp } from "./Profile";
import { AuthContext } from "../context/Context";

type props = {
  component: React.ComponentType<StringProp>;
};

const Private = ({ component: Component }: props) => {
  const value = useContext(AuthContext);
  if (value.isLoggedIn) {
    return <Component name="gowtham" />;
  }

  return <Login />;
};

export default Private;

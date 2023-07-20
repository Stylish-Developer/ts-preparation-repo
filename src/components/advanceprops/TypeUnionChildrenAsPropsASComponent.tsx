import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  status: "loading" | "success" | "failure";
  messageCount: number;
};
const TypeUnionChildrenAsPropsASComponent = ({
  children,
  status,
  messageCount,
}: Props) => {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Welcome to my GitHub Repo";
  } else if (status === "failure") {
    message = "Try again";
  }

  return (
    <>
      <p>This component has another component as a child </p>
      <div>{children}</div>
      <h3>{message}</h3>
      <h2>Message count - {messageCount}</h2>
    </>
  );
};

export default TypeUnionChildrenAsPropsASComponent;

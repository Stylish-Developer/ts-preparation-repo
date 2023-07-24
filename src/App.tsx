// -- stylesheet imported here
import "./App.css";
import AuthIndexFile from "./auth";
import AdvanceProps from "./components/advanceprops";
import BasicProps from "./components/basicprops";
import ClassComponent from "./components/class";
import EventProps from "./components/eventprops";
import CssProps from "./components/styleprops";
import TypingProps from "./components/typingprops";
import Generics from "./generics";
import HooksType from "./hooks";
import StrictProps from "./strictProps";

// -- App component
const App = () => {
  return (
    <>
      <h1>React Typescript 25 concepts App</h1>
      <TypingProps />
      <BasicProps />
      <AdvanceProps />
      <EventProps />
      <CssProps />
      <HooksType />
      <hr />
      <ClassComponent message="the count value is "/>
      <AuthIndexFile />
      <Generics />
      <StrictProps />
    </>
  );
};

export default App;

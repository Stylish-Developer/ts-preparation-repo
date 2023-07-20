// -- stylesheet imported here
import "./App.css";
import AdvanceProps from "./components/advanceprops";
import BasicProps from "./components/basicprops";
import EventProps from "./components/eventprops";
import CssProps from "./components/styleprops";
import TypingProps from "./components/typingprops";
import HooksType from "./hooks";

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
    </>
  );
};

export default App;

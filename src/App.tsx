// -- stylesheet imported here
import "./App.css";
import AdvanceProps from "./components/advanceprops";
import BasicProps from "./components/basicprops";
import EventProps from "./components/eventprops";
import CssProps from "./components/styleprops";
import TypingProps from "./components/typingprops";

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
    </>
  );
};

export default App;

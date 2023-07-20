import Text from "./Text";
import TypeUnionChildrenAsPropsASComponent from "./TypeUnionChildrenAsPropsASComponent";

// -- in this component has union type, children as text prop, children as another component and optional rendering
const AdvanceProps = () => {
  return (
    <>
      <h3>3 Advance Props</h3>
      <p>
        note: union, children as text and as another component, optional type
        only
      </p>
      <Text>Hello Everybody!</Text>
      <TypeUnionChildrenAsPropsASComponent status="loading" messageCount={1}>
        <Text>Welcome to this repository</Text>
      </TypeUnionChildrenAsPropsASComponent>
    </>
  );
};

export default AdvanceProps;

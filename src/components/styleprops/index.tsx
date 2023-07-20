import Container from "./Container";

const CssProps = () => {
  return (
    <>
      <h3>Style props - ( type for css styles as props )</h3>
      <Container
        styles={{
          height: "200px",
          width: "200px",
          border: "1px solid #ccc",
        }}
      />
    </>
  );
};

export default CssProps;

import GenericsChild from "./Child";

const Generics = () => {
  const onClick = (value: any) => {
    alert(`You chosen ${value.name}`);
  };
  return (
    <>
      <h3>Generics topic</h3>
      {/* <GenericsChild list={["One", "Two", "Three"]} onClick={onClick} /> */}
      {/* <GenericsChild list={[1, 2, 3]} onClick={onClick} /> */}
      <GenericsChild
        list={[
          {
            id: 1,
            name: "JIN",
          },
          {
            id: 2,
            name: "EDDY",
          },
          {
            id: 3,
            name: "ANNA",
          }
        ]}
        onClick={onClick}
      />
    </>
  );
};

export default Generics;

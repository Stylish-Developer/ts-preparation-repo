import TypeForNumBooObjArr from "./TypeForNumBooObjArr";

// -- in this component has boolean, number, object, array of object
const BasicProps = () => {
  const number = 100;
  const isLoggedIn = true;
  const employee = {
    name: "gowtham",
    job: "software engineer",
    technology: "ReactJS",
    area: "Frontend",
    email: "gowthamsampathkumar@outlook.com",
  };

  const nameList = [
    { id: 1, name: "Jin" },
    { id: 2, name: "Eddy" },
    { id: 3, name: "paul" },
    { id: 4, name: "law" },
    { id: 5, name: "yoshi" },
  ];

  return (
    <>
      <h2>Basic Props</h2>
      <p>note: number, boolean, object, array and array of object types only</p>
      <TypeForNumBooObjArr
        number={number}
        isLoggedIn={isLoggedIn}
        employee={employee}
        nameList={nameList}
      />
    </>
  );
};

export default BasicProps;

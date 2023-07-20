type Props = {
  number: number;
  isLoggedIn: boolean;
  employee: {
    name: string;
    job: string;
    technology: string;
    area: string;
    email: string;
  };
  nameList: {
    id: number;
    name: string;
  }[];
};

const TypeForNumBooObjArr = (props: Props) => {
  const { number, isLoggedIn, employee, nameList } = props;
  return (
    <>
      <p>Number: {number}</p>
      {isLoggedIn ? (
        <p> boolean type: welcome admin</p>
      ) : (
        <p>boolean type: welcome guest</p>
      )}
      <p>employee Detail: object type</p>
      <p>Name: {employee.name}</p>
      <p>Job: {employee.job}</p>
      <p>Technology: {employee.technology}</p>
      <p>Area: {employee.area}</p>
      <p>Email: {employee.email}</p>
      <p>Name List: array of object</p>
      {nameList.map((name) => (
        <p key={name.id}>Player: {name.name}</p>
      ))}
    </>
  );
};

export default TypeForNumBooObjArr;

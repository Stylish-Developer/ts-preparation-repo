type Props<T> = {
  list: T[];
  onClick: (value: T) => void;
};

const GenericsChild = <T extends {id: number, name: string}>({ list, onClick }: Props<T>) => {
  return (
    <>
      <ul>
        {list.map((item) => (
          <li onClick={() => onClick(item)} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenericsChild;

type Props = {
    // handleClick: () => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void // if you want to pass event into function 
}
const Button = (props: Props) => {
    const {handleClick} = props;
  return (
    <>
      <button onClick={(e) => handleClick(e, 10)}>click</button>
    </>
  );
};

export default Button;

type InputProps = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    const { value, handleChange } = props;
    return(
        <>
        <input value={value} onChange={handleChange}/>
        </>
    )
}

export default Input;
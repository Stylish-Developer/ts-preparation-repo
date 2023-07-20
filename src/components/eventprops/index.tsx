// -- Event Props
//  The most use onChange and onClick event

import Button from "./Button";
import Input from "./Input";

const EventProps = () => {
  return (
    <>
      <p>4 Event props:</p>
      <p>note : type for onChange and onClick event</p>
      <Input value="" handleChange={(e) => console.log(e)} />
      &nbsp;
      <Button handleClick={(e, id) => console.log('clicked', e, id)}/>
    </>
  );
};

export default EventProps;

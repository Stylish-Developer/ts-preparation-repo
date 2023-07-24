type positiveProp = {
  positive: boolean;
  negative?: never;
  zero?: never;
};

type negativeProp = {
  negative: boolean;
  positive?: never;
  zero?: never;
};

type zeroProp = {
  zero: boolean;
  negative?: never;
  positive?: never;
};

type StatusProp = positiveProp | negativeProp | zeroProp;

const StrictChild = ({ positive, negative, zero }: StatusProp) => {
  return (
    <>
      <p>{positive && " Status - Positive"}</p>
      <p>{negative && " Status - Negative"}</p>
      <p>{zero && " Status - Zero"}</p>
    </>
  );
};

export default StrictChild;

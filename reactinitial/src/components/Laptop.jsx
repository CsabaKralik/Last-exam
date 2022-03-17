import { useState } from "react";

const Laptop = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={handleClick}>{show ? "Show less" : "Show more"}</button>
      {show && (
        <p>
          {props.brand}, {props.weigth} kg
        </p>
      )}
    </div>
  );
};

export default Laptop;

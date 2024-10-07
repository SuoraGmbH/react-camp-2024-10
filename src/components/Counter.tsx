import React, { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      Counter: {counter} <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;

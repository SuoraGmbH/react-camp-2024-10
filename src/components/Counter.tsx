import React from "react";
import useCounter from "./useCounter.ts";

const Counter: React.FunctionComponent = () => {
  const { counter, increment } = useCounter();

  return (
    <div>
      Counter: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

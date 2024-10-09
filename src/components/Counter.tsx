import React, { useState } from "react";
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  // return [counter, () => setCounter((counter) => counter + 1)];
  return {
    counter,
    increment: () => setCounter((counter) => counter + 1),
    decrement: () => setCounter((counter) => counter - 1),
  };
};

const Counter: React.FunctionComponent = () => {
  // const [counter, increment] = useCounter();
  const { counter, increment } = useCounter();

  return (
    <div>
      Counter: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

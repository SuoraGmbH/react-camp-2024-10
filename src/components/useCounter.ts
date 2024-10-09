import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  return {
    counter,
    increment: () => setCounter((counter) => counter + 1),
  };
};

export default useCounter;

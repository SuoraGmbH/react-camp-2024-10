import React from "react";

interface Props {
  city?: string;
}

export const Welcome: React.FunctionComponent<Props> = ({ city }) => {
  if (city === undefined) {
    return <h1>Hello, stranger!</h1>;
  }

  const handleClick = (event: React.MouseEvent) => {
    console.log(event.pageY);
  };

  return <div onClick={handleClick}>Hello {city.toUpperCase()}</div>;
};

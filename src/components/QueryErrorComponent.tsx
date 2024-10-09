import React from "react";
import { useQuery } from "@tanstack/react-query";
interface Props {
  // Hiermit entspricht der Error immer dem, was useQuery zurückgibt
  error: ReturnType<typeof useQuery>["error"];
}

const QueryErrorComponent: React.FunctionComponent<Props> = ({ error }) => {
  if (error instanceof Error) {
    return <div>Etwas schiefgelaufen: {error.message}</div>;
  }

  return <div>Etwas ist schiefgelaufen, und ich weiß nicht was.</div>;
};

export default QueryErrorComponent;

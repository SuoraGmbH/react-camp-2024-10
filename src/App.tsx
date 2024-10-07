import * as React from "react";
import { Welcome } from "./components/Welcome.tsx";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Welcome />
      <Welcome city="Oer-Erkenschwick" />
      Wann ist Mittagspause?
    </>
  );
};

export default App;

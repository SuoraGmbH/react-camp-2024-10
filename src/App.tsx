import * as React from "react";
import { Welcome } from "./components/Welcome.tsx";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Welcome />
      <Welcome city="Oer-Erkenschwick" />
      Wann ist Mittagspause?
    </div>
  );
};

export default App;

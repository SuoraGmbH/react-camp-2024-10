import * as React from "react";
import { Welcome } from "./components/Welcome.tsx";
import TimeEntryView from "./components/TimeEntryView.tsx";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Welcome />
      <Welcome city="Oer-Erkenschwick" />
      <TimeEntryView comment="Hallo Welt" />
      Wann ist Mittagspause?
    </>
  );
};

export default App;

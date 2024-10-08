import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";

const App: React.FunctionComponent = () => {
  return (
    <>
      <TimeEntryList />
      <TimeEntryForm />
    </>
  );
};

export default App;

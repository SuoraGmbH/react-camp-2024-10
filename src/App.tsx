import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import { useState } from "react";
import TimeEntry from "./domain/TimeEntry.ts";

const App: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  return (
    <>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm
        onNewTimeEntry={(timeEntry) => {
          setTimeEntries([...timeEntries, timeEntry]);
          console.log(timeEntry);
        }}
      />
    </>
  );
};

export default App;

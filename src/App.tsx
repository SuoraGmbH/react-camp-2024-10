import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import TimeEntry from "./domain/TimeEntry.ts";
import { useState } from "react";

const App: React.FunctionComponent = () => {
  const initialTimeEntries: TimeEntry[] = [
    {
      id: "ecf06450-2cf7-4ce9-adf6-7263e3027422",
      comment: "React lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "ecf06450-2cf7-4ce9-adf8-7263e3027422",
      comment: "React testing lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "ecf06450-2cf7-3ce9-adf6-7263e3027422",
      comment: "React Query lernen",
      start: new Date(),
      end: new Date(),
    },
  ];

  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);

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

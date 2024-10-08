import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import TimeEntry from "./domain/TimeEntry.ts";

const App: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
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

  return (
    <>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm onNewTimeEntry={(timeEntry) => console.log(timeEntry)} />
    </>
  );
};

export default App;

import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import { useState } from "react";
import TimeEntry from "./domain/TimeEntry.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm
        onNewTimeEntry={(timeEntry) => {
          setTimeEntries([...timeEntries, timeEntry]);
          console.log(timeEntry);
        }}
      />
    </QueryClientProvider>
  );
};

export default App;

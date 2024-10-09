import * as React from "react";
import TimeEntryForm from "./TimeTracking/TimeEntryForm.tsx";
import TimeEntryList from "./TimeTracking/TimeEntryList.tsx";
import { useState } from "react";
import TimeEntry from "./TimeTracking/TimeEntry.ts";
import { GithubRepoStats } from "./Github/GithubRepoStats.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DynamicGithubRepoStats from "./Github/DynamicGithubRepoStats.tsx";
import TimeEntryListFromBackend from "./TimeTracking/TimeEntryListFromBackend.tsx";

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <TimeEntryListFromBackend />
      <hr />
      <GithubRepoStats repoName="SuoraGmbH/react-camp-2024-10" />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="facebook/react" />
      <GithubRepoStats repoName="facebook/react" />
      <div style={{ border: "3px solid pink" }}>
        <DynamicGithubRepoStats />
      </div>
      <hr />
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

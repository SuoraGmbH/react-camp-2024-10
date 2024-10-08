import * as React from "react";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import { useState } from "react";
import TimeEntry from "./domain/TimeEntry.ts";
import { GithubRepoStats } from "./components/GithubRepoStats.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats.tsx";

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
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

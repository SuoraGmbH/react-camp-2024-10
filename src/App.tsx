import * as React from "react";
import { Welcome } from "./components/Welcome.tsx";
import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntry from "./domain/TimeEntry.ts";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import Counter from "./components/Counter.tsx";
import { GithubRepoStats } from "./components/GithubRepoStats.tsx";
import DynamicGithubRepoStats from "./components/DynamicGithubRepoStats.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";

function getTimeEntryFromBackend() {
  const timeEntry: TimeEntry = {
    id: "4711",
    comment: "React Workshop",
    start: new Date(),
    end: new Date(),
  };

  return timeEntry;
}

const App: React.FunctionComponent = () => {
  const timeEntry = getTimeEntryFromBackend();
  return (
    <>
      <TimeEntryList />
      <DynamicGithubRepoStats key={23} />
      <GithubRepoStats repoName="facebook/react" />
      <Counter />
      <TimeEntryForm />
      <Welcome />
      <Welcome city="Oer-Erkenschwick" />
      <TimeEntryView timeEntry={timeEntry} />
      Wann ist Mittagspause?
    </>
  );
};

export default App;

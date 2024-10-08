import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import TimeEntryView from "./TimeEntryView.tsx";

interface Props {
  timeEntries: TimeEntry[];
}

const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </>
  );
};

export default TimeEntryList;

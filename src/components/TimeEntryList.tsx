import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

const TimeEntryList: React.FunctionComponent = () => {
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
    <ul>
      {timeEntries.map((timeEntry) => {
        return <li key={timeEntry.id}>{timeEntry.comment}</li>;
      })}
    </ul>
  );
};

export default TimeEntryList;

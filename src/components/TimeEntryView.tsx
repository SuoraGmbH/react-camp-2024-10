import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return <div>{timeEntry.comment}</div>;
};

export default TimeEntryView;

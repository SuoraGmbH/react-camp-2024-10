import React from "react";
import TimeEntryList from "./Components/TimeEntryList.tsx";
import { useQuery } from "@tanstack/react-query";
import fetchTimeEntries from "./Api/fetchTimeEntries.ts";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["timeEntries", "list"],
    queryFn: fetchTimeEntries,
  });

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (!isSuccess) {
    return <div>Etwas ist schiefgelaufen.</div>;
  }

  return <TimeEntryList timeEntries={data} />;
};

export default TimeEntryListFromBackend;

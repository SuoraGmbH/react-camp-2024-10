import React from "react";
import TimeEntryList from "./TimeEntryList.tsx";
import { useQuery } from "@tanstack/react-query";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["timeEntries", "list"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/timeEntries");

      return response.json();
    },
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

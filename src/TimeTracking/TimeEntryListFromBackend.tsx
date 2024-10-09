import React from "react";
import TimeEntryList from "./Components/TimeEntryList.tsx";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const timeEntrySchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

const timeEntriesResponseSchema = z.array(timeEntrySchema);

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["timeEntries", "list"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/timeEntries");

      const responseData = await response.json();

      return timeEntriesResponseSchema.parse(responseData);
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

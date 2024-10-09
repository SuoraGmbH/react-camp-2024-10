import React from "react";
import TimeEntryList from "./Components/TimeEntryList.tsx";
import { useQuery } from "@tanstack/react-query";
import fetchTimeEntries from "./Api/fetchTimeEntries.ts";
import LoadingIndicator from "../components/LoadingIndicator.tsx";
import QueryErrorComponent from "../components/QueryErrorComponent.tsx";

const TimeEntryListFromBackend: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading, error } = useQuery({
    queryKey: ["timeEntries", "list"],
    queryFn: fetchTimeEntries,
  });

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!isSuccess) {
    return <QueryErrorComponent error={error} />;
  }

  return <TimeEntryList timeEntries={data} />;
};

export default TimeEntryListFromBackend;

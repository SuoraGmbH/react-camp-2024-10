import { z } from "zod";
import { timeEntrySchema } from "../Types/TimeEntry.ts";

const timeEntriesResponseSchema = z.array(timeEntrySchema);

const fetchTimeEntries = async () => {
  const response = await fetch("http://localhost:3001/timeEntries");

  const responseData = await response.json();

  return timeEntriesResponseSchema.parse(responseData);
};

export default fetchTimeEntries;

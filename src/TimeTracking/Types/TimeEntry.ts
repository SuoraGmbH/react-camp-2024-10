import { z } from "zod";

export const timeEntrySchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

type TimeEntry = z.infer<typeof timeEntrySchema>;
export default TimeEntry;

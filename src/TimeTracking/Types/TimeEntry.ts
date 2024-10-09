import { z } from "zod";

export default interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export const timeEntrySchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

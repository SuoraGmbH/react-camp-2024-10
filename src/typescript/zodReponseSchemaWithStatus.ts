import { z } from "zod";

const timeEntrySchema = z.object({
  id: z.string(),
  comment: z.string(),
  start: z.coerce.date(),
  end: z.coerce.date(),
});

export const exampleResponse = {
  success: true,
  timeEntries: [
    {
      id: "2022-01-10T13:59:24.082Z",
      start: "2022-01-10T10:00:00.000Z",
      end: "2022-01-10T12:00:00.000Z",
      comment: "Learn React",
    },
    {
      id: "2022-01-11T19:59:24.082Z",
      start: "2022-01-11T16:00:00.000Z",
      end: "2022-01-11T18:00:00.000Z",
      comment: "Learn Redux",
    },
  ],
};

export const errorResponse = {
  success: false,
  error: "Database not available",
};

const timeEntriesSuccessResponseSchema = z.object({
  success: z.literal(true),
  timeEntries: z.array(timeEntrySchema),
});

const timeEntriesErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
});

const timeEntriesResponseSchema = z.discriminatedUnion("success", [
  timeEntriesSuccessResponseSchema,
  timeEntriesErrorResponseSchema,
]);

export const parseResponse = (response: unknown) => {
  const parsedResponse = timeEntriesResponseSchema.parse(response);

  if (parsedResponse.success) {
    parsedResponse.timeEntries.map(console.log);
  } else {
    console.log(parsedResponse.error);
  }

  // parsedResponse.timeEntries.map()
};

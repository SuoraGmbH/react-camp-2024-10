import { z } from "zod";

const repoDataSchema = z.object({
  stargazers_count: z.number(),
  archive_url: z.string(),
  pushed_at: z.coerce.date(),
  forks_count: z.coerce.number(),
});

export const fetchGithubRepoData = async (repoName: string) => {
  try {
    // const response = await fetch(`http://localhost:3001/timeEntries`);
    const response = await fetch(`https://api.github.com/repos/${repoName}`);

    // if (response.status !== 200) {
    //   throw new Error(`HTTP request failed with status ${response.status}`);
    // }

    const data: unknown = await response.json();

    const parsedData = repoDataSchema.parse(data);

    return parsedData;
  } catch (error) {
    if (error instanceof TypeError) {
      console.warn(
        `An error was caught: ${error.name}, message: ${error.message}.`,
      );
    }

    throw error;
  }
};

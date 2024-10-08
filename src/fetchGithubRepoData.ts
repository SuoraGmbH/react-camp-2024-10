type RepoData = {
  archive_url: string;
  stargazers_count: number;
};

export const fetchGithubRepoData = async (
  repoName: string,
): Promise<RepoData> => {
  try {
    // const response = await fetch(`http://localhost:3001/timeEntries`);
    const response = await fetch(`https://api.github.com/repos/${repoName}`);

    if (response.status !== 200) {
      throw new Error(`HTTP request failed with status ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.warn(
        `An error was caught: ${error.name}, message: ${error.message}.`,
      );
    }

    throw error;
  }
};

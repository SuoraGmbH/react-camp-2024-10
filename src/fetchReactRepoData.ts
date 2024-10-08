type RepoData = {
  archive_url: string;
  stargazers_count: number;
};

export const fetchReactRepoData = async (): Promise<RepoData> => {
  try {
    const response = await fetch("https://api.github.com/repos/facebook/react");
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

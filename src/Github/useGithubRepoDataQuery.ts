import { useQuery } from "@tanstack/react-query";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";

const useGithubRepoDataQuery = (repoName: string) => {
  const queryResult = useQuery({
    queryFn: () => fetchGithubRepoData(repoName),
    queryKey: ["githubRepoData", repoName],
  });

  return queryResult;
};

export default useGithubRepoDataQuery;

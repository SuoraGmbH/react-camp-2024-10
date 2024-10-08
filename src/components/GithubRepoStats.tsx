import React from "react";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  repoName: string;
}

export const GithubRepoStats: React.FunctionComponent<Props> = ({
  repoName,
}) => {
  const queryResult = useQuery({
    queryFn: async () => {
      const repoData = await fetchGithubRepoData(repoName);

      return repoData.stargazers_count;
    },
    queryKey: [repoName],
  });

  if (queryResult.isLoading) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {repoName} hat {queryResult.data} Sternchen ⭐
    </div>
  );
};

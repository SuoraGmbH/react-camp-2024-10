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
    queryFn: () => fetchGithubRepoData(repoName),
    queryKey: [repoName],
  });

  if (queryResult.isLoading) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {repoName} hat {queryResult.data?.stargazers_count} Sternchen ⭐
    </div>
  );
};

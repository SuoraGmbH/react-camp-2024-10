import React from "react";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  repoName: string;
}

export const GithubRepoStats: React.FunctionComponent<Props> = ({
  repoName,
}) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchGithubRepoData(repoName),
    queryKey: [repoName],
  });

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (!isSuccess) {
    return <div>kaputt</div>;
  }

  return (
    <div>
      {repoName} hat {data.stargazers_count.toLocaleString()} Sternchen ⭐
    </div>
  );
};

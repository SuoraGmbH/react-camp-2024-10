import React from "react";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  repoName: string;
}

export const GithubRepoStats: React.FunctionComponent<Props> = ({
  repoName,
}) => {
  const { data, isFetching, isLoading, isSuccess, refetch, isStale, error } =
    useQuery({
      queryFn: () => fetchGithubRepoData(repoName),
      queryKey: [repoName],
    });

  if (isLoading) {
    return <div>Loading…</div>;
  }

  if (error) {
    return <div>kaputt: {error.message}</div>;
  }

  if (!isSuccess) {
    return <div>kaputt und ich weiß nicht wieso.</div>;
  }

  return (
    <div style={{ opacity: isFetching && isStale ? 0.2 : 1 }}>
      <button onClick={() => refetch()}>♻️</button>
      {repoName} hat {data.stargazers_count.toLocaleString()} Sternchen ⭐
      {isFetching ? "♻️" : ""}
    </div>
  );
};

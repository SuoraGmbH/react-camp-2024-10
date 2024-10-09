import React from "react";
import useGithubRepoDataQuery from "./useGithubRepoDataQuery.ts";

interface Props {
  repoName: string;
}

export const GithubRepoStats: React.FunctionComponent<Props> = ({
  repoName,
}) => {
  const { data, isFetching, isLoading, isSuccess, refetch, isStale, error } =
    useGithubRepoDataQuery(repoName);

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
      <pre>
        Es wurde zuletzt am {data.pushed_at.toLocaleDateString()} gepushed
      </pre>
    </div>
  );
};

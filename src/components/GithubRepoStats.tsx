import React, { useEffect, useState } from "react";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";

interface Props {
  repoName: string;
}

export const GithubRepoStats: React.FunctionComponent<Props> = ({
  repoName,
}) => {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    fetchGithubRepoData(repoName).then((repoData) => {
      setStargazersCount(repoData.stargazers_count);
    });
  }, [repoName]);

  if (stargazersCount === 0) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      {repoName} hat {stargazersCount} Sternchen ⭐
    </div>
  );
};

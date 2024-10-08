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
    (async function () {
      const repoData = await fetchGithubRepoData(repoName);
      setStargazersCount(repoData.stargazers_count);
    })();

    return () => {};
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

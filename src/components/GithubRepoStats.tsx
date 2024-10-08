import React, { useEffect, useState } from "react";
import { fetchGithubRepoData } from "../fetchGithubRepoData.ts";

export const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    fetchGithubRepoData("facebook/react").then((repoData) => {
      setStargazersCount(repoData.stargazers_count);
    });
  }, []);

  if (stargazersCount === 0) {
    return <div>Loading…</div>;
  }

  return <div>facebook/react hat {stargazersCount} Sternchen ⭐</div>;
};

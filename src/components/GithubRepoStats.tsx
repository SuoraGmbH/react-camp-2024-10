import React, { useEffect, useState } from "react";
import { fetchReactRepoData } from "../fetchReactRepoData.ts";

export const GithubRepoStats: React.FunctionComponent = () => {
  const [stargazersCount, setStargazersCount] = useState(0);
  console.log("GithubRepoStats rendert grade");

  useEffect(() => {
    console.log("Effekt wird ausgeführt");
    fetchReactRepoData().then((repoData) => {
      console.log("Daten sind da");
      setStargazersCount(repoData.stargazers_count);
    });
  }, []);

  if (stargazersCount === 0) {
    console.log("GithubRepoStats ist fertig mit dem rendern");
    return <div>Loading…</div>;
  }

  console.log("GithubRepoStats ist fertig mit dem rendern");
  return <div>facebook/react hat {stargazersCount} Sternchen ⭐</div>;
};

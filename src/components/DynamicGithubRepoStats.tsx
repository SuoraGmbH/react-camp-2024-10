import React, { useState } from "react";
import { GithubRepoStats } from "./GithubRepoStats.tsx";

const DynamicGithubRepoStats: React.FunctionComponent = () => {
  const [repoName, setRepoName] = useState("facebook/react");
  return (
    <div>
      <input onChange={(event) => setRepoName(event.target.value)} />
      test:
      <GithubRepoStats highlight={true} repoName={repoName} />
    </div>
  );
};

export default DynamicGithubRepoStats;

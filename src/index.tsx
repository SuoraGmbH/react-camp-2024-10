import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const reactRoot = createRoot(container);
  reactRoot.render(<App />);
}

type RepoData = {
  archive_url: string;
  stargazers_count: number;
};

const fetchReactRepoData = async (): Promise<RepoData> => {
  try {
    const response = await fetch("https://api.github.com/repos/facebook/react");
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.warn(
        `An error was caught: ${error.name}, message: ${error.message}.`,
      );
    }

    throw error;
  }
};

console.log(fetchReactRepoData());

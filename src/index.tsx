import { createRoot } from "react-dom/client";
import App from "./App";
import { fetchReactRepoData } from "./fetchReactRepoData.ts";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const reactRoot = createRoot(container);
  reactRoot.render(<App />);
}

console.log(fetchReactRepoData());

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const reactRoot = createRoot(container);
  reactRoot.render(<App />);
}

const fetchReactData = async () => {
  const response = await fetch("https://localhost:8080/repos/facebook/react");
  const data = await response.json();
  console.log(data.archive_url);
};

fetchReactData();

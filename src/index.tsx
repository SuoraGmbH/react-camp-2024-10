import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const element = <h1>Hallo Erfurt!!</h1>;
  const reactRoot = createRoot(container);
  reactRoot.render(element);
}

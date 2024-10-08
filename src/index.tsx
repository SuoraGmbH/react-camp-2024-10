import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const reactRoot = createRoot(container);
  reactRoot.render(<App />);
}

const fetchReactData = () => {
  const responsePromise = fetch("https://api.github.com/repos/facebook/react");

  // .then(function (response) {
  //   console.log(response);
  //
  //   return response.json();
  // })
  responsePromise
    .then((response) => response.json())
    .then((data) => data.archive_url)
    .then((archiveUrl) => console.log(archiveUrl))
    .catch(function (reason) {
      console.warn("Hier kommt meine Meldung");
      console.error(reason);
      console.warn("Das war meine Meldung");
    })
    .finally(function () {
      console.log("Wir sind finally fertig!");
    });
};

fetchReactData();

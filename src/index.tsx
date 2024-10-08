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

  responsePromise.then(function (response) {
    console.log(response);

    response.json().then(function (bodyData) {
      console.log(bodyData);
    });

    console.log("Ich kann jetzt was anderes machen");
  });

  responsePromise.catch(function (reason) {
    console.warn("Hier kommt meine Meldung");
    console.error(reason);
    console.warn("Das war meine Meldung");
  });

  responsePromise.finally(function () {
    console.log("Wir sind finally fertig!");
  });
};

fetchReactData();

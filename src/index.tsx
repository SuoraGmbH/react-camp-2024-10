import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
if (container === null) {
  alert("Es gibt kein Element mit der id root");
} else {
  const element = <h1>Hallo Erfurt!!</h1>;
  const reactRoot = createRoot(container);
  reactRoot.render(element);

  // Hiermit würde die Anwendung nach 3 Sekunden wieder verschwinden
  // setTimeout(() => {
  //   reactRoot.unmount();
  // }, 3_000_000);
}

// Die React-Doku schlägt folgende Lösung mit dem Ausrufezeichen vor.
// Diese unterdrückt aber potentiell Probleme, deswegen rate ich zu der oberen Variante
// const element = <h1>Hallo Erfurt!!</h1>;
// const reactRoot = createRoot(container!);
// reactRoot.render(element);

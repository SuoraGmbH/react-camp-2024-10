import { defineConfig } from "orval";
// Generate the client by running ./node_modules/.bin/orval on the CLI
export default defineConfig({
  jsonServer: {
    input: "json-server/swagger.yaml",
    output: {
      target: "src/TimeTracking/Api/Client",
      schemas: "src/TimeTracking/Api/Schema",
      client: "react-query",
    },
  },
  jsonServerZod: {
    input: "json-server/swagger.yaml",
    output: {
      target: "src/TimeTracking/Api/Zod",
      client: "zod",
    },
  },
});

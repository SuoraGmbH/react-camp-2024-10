import { http, HttpResponse } from "msw";

export const githubRepoFacebookReactRateLimitedMockHandler = http.get(
  "https://api.github.com/repos/facebook/react",
  () => {
    return HttpResponse.json(
      {
        error: "Rate limited",
      },
      { status: 403 },
    );
  },
);

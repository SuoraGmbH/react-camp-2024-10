import { render, screen } from "@testing-library/react";
import { GithubRepoStats } from "./GithubRepoStats.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { beforeEach } from "vitest";
import { expect } from "@storybook/test";
import { mockServer } from "../setupTests.ts";
import { githubRepoFacebookReactSuccessMockHandler } from "./mocks/repo/facebook/react/success.ts";
import { githubRepoFacebookReactRateLimitedMockHandler } from "./mocks/repo/facebook/react/rateLimitted.ts";

describe("<GithubRepoStats />", () => {
  beforeEach(() => {
    mockServer.use(githubRepoFacebookReactSuccessMockHandler);
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <GithubRepoStats repoName="facebook/react" />
      </QueryClientProvider>,
    );
  });

  test("renders without crashing", () => {});
  it("renders the loading indicator", () => {
    expect(screen.getByText(/loading/i)).toBeVisible();
  });

  it("renders the data from the server", async () => {
    await screen.findByText(/facebook\/react/);
    expect(screen.getByText("4.711", { exact: false })).toBeVisible();
  });
});

test("renders an error if we were rate limitted", async () => {
  mockServer.use(githubRepoFacebookReactRateLimitedMockHandler);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  render(
    <QueryClientProvider client={queryClient}>
      <GithubRepoStats repoName="facebook/react" />
    </QueryClientProvider>,
  );

  await screen.findByText(/kaputt/i);
  expect(screen.getByText(/HTTP request failed with status 403/)).toBeVisible();
});

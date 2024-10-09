import { GithubRepoStats } from "./GithubRepoStats.tsx";
import { beforeEach } from "vitest";
import { expect } from "@storybook/test";
import { mockServer } from "../setupTests.ts";
import { githubRepoFacebookReactSuccessMockHandler } from "./mocks/repo/facebook/react/success.ts";
import { githubRepoFacebookReactRateLimitedMockHandler } from "./mocks/repo/facebook/react/rateLimitted.ts";
import { render, screen } from "../test-utils.tsx";

describe("<GithubRepoStats />", () => {
  describe("Successful Requests", () => {
    beforeEach(() => {
      mockServer.use(githubRepoFacebookReactSuccessMockHandler);
    });

    test("renders without crashing", () => {
      render(<GithubRepoStats repoName="facebook/react" />);
    });

    it("renders the loading indicator", () => {
      render(<GithubRepoStats repoName="facebook/react" />);
      expect(screen.getByText(/loading/i)).toBeVisible();
    });

    it("renders the data from the server", async () => {
      render(<GithubRepoStats repoName="facebook/react" />);
      await screen.findByText(/facebook\/react/);
      expect(screen.getByText("4.711", { exact: false })).toBeVisible();
    });
  });

  test("renders an error if we were rate limitted", async () => {
    mockServer.use(githubRepoFacebookReactRateLimitedMockHandler);
    render(<GithubRepoStats repoName="facebook/react" />);

    await screen.findByText(/kaputt/i);
    expect(
      screen.getByText(/HTTP request failed with status 403/),
    ).toBeVisible();
  });
});

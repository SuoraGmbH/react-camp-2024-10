import type { Meta, StoryObj } from "@storybook/react";

import { GithubRepoStats } from "./GithubRepoStats";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { githubRepoFacebookReactSuccessMockHandler } from "./mocks/repo/facebook/react/success.ts";
import { githubRepoFacebookReactRateLimitedMockHandler } from "./mocks/repo/facebook/react/rateLimitted.ts";

const meta = {
  component: GithubRepoStats,
  render: (props) => {
    const client = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    return (
      <QueryClientProvider client={client}>
        <GithubRepoStats {...props} />
      </QueryClientProvider>
    );
  },
} satisfies Meta<typeof GithubRepoStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repoName: "facebook/react",
  },
  parameters: {
    msw: {
      handlers: [githubRepoFacebookReactSuccessMockHandler],
    },
  },
};

export const RateLimit: Story = {
  args: {
    repoName: "facebook/react",
  },
  parameters: {
    msw: {
      handlers: [githubRepoFacebookReactRateLimitedMockHandler],
    },
  },
};

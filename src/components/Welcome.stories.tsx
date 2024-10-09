import type { Meta, StoryObj } from "@storybook/react";

import { Welcome } from "./Welcome.tsx";

const meta: Meta<typeof Welcome> = {
  component: Welcome,
};

type Story = StoryObj<typeof Welcome>;

export default meta;

export const FirstExample: Story = {};

export const Berlin: Story = {
  args: {
    city: "Berlin",
  },
};

export const Erfurt: Story = {
  args: {
    city: "Erfurt",
  },
};

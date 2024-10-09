import React, { ReactElement } from "react";
import {
  render,
  RenderOptions,
  within as originalWithin,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Taken from https://testing-library.com/docs/react-testing-library/setup#custom-render

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

// Ursprünglich haben wir das withinOrThrow genannt und damit nicht das orignal überschrieben.
// Vielleicht wäre das die bessere Idee gewesen, aber es ist jetzt so.
export const within = (element: HTMLElement | null) => {
  if (!element) {
    throw new Error("Element not found");
  }

  return originalWithin(element);
};

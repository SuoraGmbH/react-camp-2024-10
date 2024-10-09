import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome.tsx";

describe("<Welcome />", () => {
  test("it renders without crashing", () => {
    render(<Welcome />);
  });

  test("it greets strangers", () => {
    render(<Welcome />);

    // expect(screen.getByText("hello, stranger", { exact: false })).toBeVisible();
    expect(screen.getByText(/hello(.*)stranger/i)).toBeVisible();
  });

  test("it says hello to strangers", () => {
    render(<Welcome />);
    expect(screen.getByText(/hello/i)).toBeVisible();
  });

  test("it calls strangers strange", () => {
    render(<Welcome />);
    expect(screen.getByText(/stranger/i)).toBeVisible();
  });

  test("Greets cities with their name", () => {
    render(<Welcome city="München" />);
    expect(screen.getByText(/münchen/i)).toBeVisible();
  });

  test("Greets cities in uppercase", () => {
    render(<Welcome city="München" />);
    expect(screen.getByText(/MÜNCHEN/)).toBeVisible();
  });
});

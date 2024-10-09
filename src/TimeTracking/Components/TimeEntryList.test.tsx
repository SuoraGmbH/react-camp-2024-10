import { render, screen } from "@testing-library/react";
import TimeEntryList from "./TimeEntryList.tsx";
import TimeEntry from "../Types/TimeEntry.ts";

const timeEntryA: TimeEntry = {
  id: "a0da97db-f4fa-4ced-869b-fa19b0040cb6",
  comment: "Ein erster Test",
  start: new Date("2024-10-09T11:59:27.122Z"),
  end: new Date("2024-10-09T11:59:27.122Z"),
};

const timeEntryB: TimeEntry = {
  id: "a0da97db-f4fa-4ced-869b-fa19b0540cb6",
  comment: "Ein zweiter Test",
  start: new Date(),
  end: new Date(),
};

describe("<TimeEntryList />", () => {
  test("renders without crashing", () => {
    render(<TimeEntryList timeEntries={[]} />);
  });

  test("it display one time entry if we pass one time entry", () => {
    render(<TimeEntryList timeEntries={[timeEntryA]} />);

    expect(screen.getByText(/ein erster test/i)).toBeVisible();
  });

  test("it displays both time entries if we pass two time entries", () => {
    render(<TimeEntryList timeEntries={[timeEntryA, timeEntryB]} />);

    expect(screen.getByText(/ein erster test/i)).toBeVisible();
    expect(screen.getByText(/ein zweiter test/i)).toBeVisible();
  });

  test("it renders html according to snapshot", () => {
    const { container } = render(
      <TimeEntryList timeEntries={[timeEntryA, timeEntryB]} />,
    );

    expect(container).toMatchSnapshot();
  });

  test("it renders text according to snapshot", () => {
    const { container } = render(
      <TimeEntryList timeEntries={[timeEntryA, timeEntryB]} />,
    );

    expect(container.textContent).toMatchInlineSnapshot(
      `"Ein erster TestEin zweiter Test"`,
    );

    expect(timeEntryA).toMatchInlineSnapshot(`
      {
        "comment": "Ein erster Test",
        "end": 2024-10-09T11:59:27.122Z,
        "id": "a0da97db-f4fa-4ced-869b-fa19b0040cb6",
        "start": 2024-10-09T11:59:27.122Z,
      }
    `);
  });
});

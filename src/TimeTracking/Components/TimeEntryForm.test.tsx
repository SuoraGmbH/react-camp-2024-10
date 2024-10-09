import { render, screen } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm.tsx";
import userEvent from "@testing-library/user-event";
import { vitest } from "vitest";

describe("<TimeEntryForm />", () => {
  it("renders without crashing", () => {
    render(<TimeEntryForm />);
  });

  it("has a submit button", () => {
    render(<TimeEntryForm />);

    expect(screen.getByText("Speichern")).toBeVisible();
  });

  it("is disabled initially", () => {
    render(<TimeEntryForm />);
    expect(screen.getByText("Speichern")).toBeDisabled();
  });

  it("enables the submit button after typing into the comment field", async () => {
    render(<TimeEntryForm />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt",
    );

    expect(screen.getByText("Speichern")).not.toBeDisabled();
  });

  it("fires a newTimeEntry event on clicking the button after filling the form", async () => {
    const handleTimeEntryMock = vitest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleTimeEntryMock} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt",
    );

    await user.click(screen.getByText("Speichern"));

    expect(handleTimeEntryMock).toHaveBeenCalledOnce();
  });

  it("fires a newTimeEntry event on pressing enter filling the form", async () => {
    const handleTimeEntryMock = vitest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleTimeEntryMock} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt{enter}",
    );

    expect(handleTimeEntryMock).toHaveBeenCalledOnce();
  });

  it("does not fire a newTimeEntry event on pressing enter without filling the form", async () => {
    const handleTimeEntryMock = vitest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleTimeEntryMock} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "{enter}",
    );

    expect(handleTimeEntryMock).not.toHaveBeenCalled();
  });

  test("after submitting the form, it is empty again", async () => {
    render(<TimeEntryForm />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt",
    );

    // Diese zusätzliche assertion ist eigentlich gegen best practices
    expect(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
    ).toHaveValue("Hallo Welt");

    await user.click(screen.getByText("Speichern"));

    expect(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
    ).toHaveValue("");
  });

  test("after submitting the form, the submit button is disabled again", async () => {
    render(<TimeEntryForm />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt",
    );

    await user.click(screen.getByText("Speichern"));

    expect(screen.getByText("Speichern")).toBeDisabled();
  });

  test("the new newTimeEntry event contains the entered comment", async () => {
    vitest.setSystemTime("2024-10-09T14:21:15.865Z");
    const handleTimeEntryMock = vitest.fn();
    render(<TimeEntryForm onNewTimeEntry={handleTimeEntryMock} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", {
        name: /kommentar/i,
      }),
      "Hallo Welt{enter}",
    );

    expect(handleTimeEntryMock).toHaveBeenCalledWith({
      id: expect.stringMatching(/[0-9a-f]{8}-/),
      comment: "Hallo Welt",
      start: new Date("2024-10-09T14:21:15.865Z"),
      end: new Date("2024-10-09T14:21:15.865Z"),
    });

    expect(handleTimeEntryMock.mock.calls[0][0].comment).toMatchInlineSnapshot(
      `"Hallo Welt"`,
    );

    // expect(handleTimeEntryMock.mock.calls).toMatchInlineSnapshot(
    //   `
    //   [
    //     [
    //       {
    //         "comment": "Hallo Welt",
    //         "end": 2024-10-09T14:21:15.865Z,
    //         "id": "2013dedd-336b-4d12-8378-5f684be434d9",
    //         "start": 2024-10-09T14:21:15.865Z,
    //       },
    //     ],
    //   ]
    // `,
    // );
  });
});

import React, { useId, useState } from "react";
import TimeEntry from "../Types/TimeEntry.ts";

interface Props {
  onNewTimeEntry?: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onNewTimeEntry }) => {
  const taskInputId = useId();
  const projectInputId = useId();
  const [inputValue, setInputValue] = useState("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const formIsValid = inputValue.trim() === "";

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formIsValid) {
      return;
    }
    setInputValue("");

    onNewTimeEntry?.({
      id: crypto.randomUUID(),
      start: new Date(),
      end: new Date(),
      comment: inputValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Aufgabe</h1>
        <label htmlFor={taskInputId}>Name</label>
        <input id={taskInputId} onChange={handleChange} value={inputValue} />
      </section>
      <section>
        <h1>Projekt</h1>
        <label htmlFor={projectInputId}>Name</label>
        <input id={projectInputId} />
      </section>
      <p>{inputValue}</p>
      <button disabled={formIsValid} type="submit">
        Speichern
      </button>
    </form>
  );
};

export default TimeEntryForm;

import React, { useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  onNewTimeEntry?: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onNewTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
      <div>
        <input onChange={handleChange} value={inputValue} />
      </div>
      <p>{inputValue}</p>
      <button type="submit">Speichern</button>
    </form>
  );
};

export default TimeEntryForm;

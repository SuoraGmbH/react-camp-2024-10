import React, { useState } from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Welt!");
    setInputValue("");
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

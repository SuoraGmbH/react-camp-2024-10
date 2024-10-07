import React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Welt!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Speichern</button>
    </form>
  );
};

export default TimeEntryForm;

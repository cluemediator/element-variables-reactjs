import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(counter);

  const handleEditClick = () => {
    setInput(counter);
    setEditMode(true);
  }

  const handleUpdateClick = () => {
    setCounter(input);
    setEditMode(false);
  }

  let element; // define variable

  // store JSX to the element
  if (editMode) {
    // Edit section
    element = <>
      <input type="number" value={input} onChange={e => setInput(e.target.value)} />
      <input type="button" value="Update" onClick={handleUpdateClick} />
    </>
  }
  else {
    // Display section
    element = <input type="button" value="Edit" onClick={handleEditClick} />
  }

  return <div>
    <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />
    <div>Counter: {counter}</div><br />
    {element}
  </div>
}

export default App;
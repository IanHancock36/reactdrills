import React, { useState } from "react";
import ClassClick from './ClassClick'
import React, from 'react'; 
function App() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <ClassClick>Click Me </ClassClick>
      <input name="First Name" value={name} onChange={handleChange} />
    </div>
  );
}

// Notes \\
// This is a functional react component to render the text input that is in
// the text box using an onChange event handler. This also stores value inside of state.
// #1 the above code displays a single input field, when typed in it passes current value
// to the handle change function.
//#2 you must declare (write) the handle function.
//#3 declare the handleChange function pass in the passing in the "synthetic event"
// which is the (e) in handleChange(e).. this is passes as first parameter of the event
// handler function. this event gives you the value from the input field everytime somone types
// into it with the events target property
//$$%$%%$ FINISH READING ARTICLE NOT FINISHED YET

export default App;

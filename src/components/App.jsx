import React, { useState } from "react";

function App() {

const [fullName, setName] = useState({ fName: "", lName: "" });
  const [isClicked, setClick] = useState('Hello');


  function handleChange(e) {

    const entry = e.target.value
    const inputName = e.target.value
    
    if (inputName === "fName") {
    setName({fName:entry})
  } else if (inputName === "lName") {
    setName({lName:entry})
  }
    
  }
  function handleclick() {
  setClick('Thank You')
}

 

  return (
    <div className="container">
      <h1>{isClicked} {fullName.fName}{fullName.lName}</h1>
      
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          />
        

        <input
              onChange={handleChange}
              name="lName"
              placeholder="Last Name"
              value={fullName.lName}
              />
        <button onClick={handleclick}>Submit</button>
      
    </div>
  );
}

export default App;

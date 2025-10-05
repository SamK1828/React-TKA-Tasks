import { useState } from 'react'

import './App.css'

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    // setFormData(event.target.value);
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }


  }

  return (
    <>
      <input type="text" name='firstName' value={firstName} onChange={handleChange} />
      <h2>Your First Name is: {firstName}</h2>
      <input type="text" name='lastName' value={lastName} onChange={handleChange} />
      <h2>Your Last Name is: {lastName}</h2>

      <h1>Your Full Name is: {firstName} Deelip {lastName}</h1>

    </>
  );
}


export default App

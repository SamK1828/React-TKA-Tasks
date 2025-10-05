// import React from "react";

function App() {
  const name = "Sam K";
  const student = {
    first: "Samarth",
    last: "Kalegaonkar",
    age: 22,
    city: "Pune",
    country: "India",
    college: "CSMSS CSCOE",
  };
  const names = ["Sam", "Adi", "Om", "Yash", "Rohan", "Sanket"];
  return (
    <div className="App">
      <div>
        <h1>My First React App</h1>
        <p>Welcome to my first React application built with Vite!</p>
        <p>My name is {name} !</p>
        <p>Student Information:</p>
        <ul>
          <li>First Name: {student.first}</li>
          <li>Last Name: {student.last}</li>
          <li>Age: {student.age}</li>
          <li>City: {student.city}</li>
          <li>Country: {student.country}</li>
          <li>College: {student.college}</li>
        </ul>
      </div>
      <div>
        <p>Names List:</p>
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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

  function fun1() {
    return "This is function 1 called inside JSX";
  }

  const fun2 = () => {
    return "This is function 2 called as a variable inside JSX";
  };

  const fun3 = () => {
    alert("Button Clicked!");
  };

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

        <hr />
        <h1>Function Calling in React</h1>
        <h2>Simple Function Call</h2>
        <h3>{fun1()}</h3>
        <h2>Function Calling as a Variable</h2>
        <h3>{fun2()}</h3>
        <h2>Function Calling on Button Click</h2>
        <button onClick={fun3}>Click Me</button>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import "./App.css";
// import StudentForm from "./components/StudentForm";
// import StudentTable from "./components/StudentTable";

// // function App() {
// //   const [count, setCount] = useState(0)
// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }
// function App() {
//   const [students, setStudents] = useState([]);

//   const deleteStudent = (indexToDelete) => {
//     if (confirm("Are you sure you want to delete this student?")) {
//       setStudents(students.filter((_, index) => index !== indexToDelete));
//     }
//   };

//   // Function to add student
//   const addStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   return (
//     <div className="container">
//       <h2>Student Registration</h2>
//       <StudentForm onRegister={addStudent} />
//       {students.length === 0 ? (
//         <h1>No students registered yet.</h1>
//       ) : (
//         <>
//           <h3>Registered Students</h3>
//           <StudentTable students={students} onDelete={deleteStudent} />
//           <p className="total">
//             Total Students: <strong>{students.length}</strong>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }
// export default App;


import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which student is being edited

  // Add or update student
  const handleAddOrUpdate = (student) => {
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = student;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, student]);
    }
  };

  // Delete student
  const deleteStudent = (indexToDelete) => {
    if (confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter((_, index) => index !== indexToDelete));
    }
  };

  // Edit student (populate form)
  const editStudent = (index) => {
    setEditIndex(index);
  };

  // 🧮 Calculate Stats
  const total = students.length;
  const above80 = students.filter((s) => s.marks > 80).length;
  const below40 = students.filter((s) => s.marks < 40).length;

  return (
    <div className="container">
      <h2>Student Registration</h2>

      <StudentForm
        onRegister={handleAddOrUpdate}
        editData={editIndex !== null ? students[editIndex] : null}
      />

      <h3>Registered Students</h3>
      <StudentTable
        students={students}
        onDelete={deleteStudent}
        onEdit={editStudent}
      />

      {/* 📊 Statistics */}
      <div className="stats">
        <p>Total Students: <strong>{total}</strong></p>
        <p>Marks greater 80: <strong>{above80}</strong></p>
        <p>Marks less than 40: <strong>{below40}</strong></p>
      </div>
    </div>
  );
}

export default App;

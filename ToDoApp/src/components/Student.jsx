// Kiran Academy Code 

import { useState } from "react";
function Student() {
 const [student, setStudent] = useState({
 roll: 0,
 firstName: "",
 lastName: "",
 marks: 0,
 });
 const [studentData, setStudentData] = useState([]);
 const inputHandler = (e) => {
 const { name, value } = e.target;
 setStudent((oldStudent) => ({ ...oldStudent, [name]: value }));
 };
 const register = (e) => {
 e.preventDefault(); // to prevent page reload on form submit
 setStudentData((oldData) => [...oldData, student]);
 reset();
 };
 const reset = () => {
 setStudent({
 roll: 0,
 firstName: "",
 lastName: "",
 marks: 0,
 });
 };
 const deleteStudent = (index) => {
 let remainingStudents = studentData.filter((std, i) => i != index);
 setStudentData(remainingStudents);
 };
 return (
 <div>
 <h1>Student Registration</h1>
 <form onSubmit={register}>
 <label> Roll No</label>
 <input
 type="number"
 name="roll"
 value={student.roll}
 onChange={inputHandler}
 />
 <label> First Name</label>
 <input
 type="text"
 name="firstName"
 value={student.firstName}
 onChange={inputHandler}
 />
 <label> Last Name</label>
 <input
 type="text"
 name="lastName"
 value={student.lastName}
 onChange={inputHandler}
 />
 <label> Marks</label>
 <input
 type="number"
 name="marks"
 value={student.marks}
 onChange={inputHandler}
 />
 <button type="submit">Register</button>
 </form>
 <br />
 {studentData.length > 0 ? (
 <table border={1}>
 <thead>
 <tr>
 <th>#</th>
 <th>Roll</th>
 <th>First Name</th>
 <th>Last Name</th>
 <th>Marks</th>
 <th>Actions</th>
 </tr>
 </thead>
 <tbody>
 {studentData.map((std, index) => (
 <tr index={index}>
 <td>{index + 1}</td>
 <td>{std.roll}</td>
 <td>{std.firstName}</td>
 <td>{std.lastName}</td>
 <td>{std.marks}</td>

 <td>
 <button type="button" onClick={() => deleteStudent(index)}>
 Delete
 </button>
 </td>
 <td>
 <button>Show</button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 ) : (
 <h1>No Student Registered</h1>
 )}
 </div>
 );
}
export default Student;
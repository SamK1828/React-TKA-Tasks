// function StudentTable({ students }) {
//   return (
//     <table border="1" className="student-table">
//       <thead>
//         <tr>
//           <th>Roll</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Marks</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.length > 0 ? (
//           students.map((stu, index) => (
//             <tr key={index}>
//               <td>{stu.roll}</td>
//               <td>{stu.firstName}</td>
//               <td>{stu.lastName}</td>
//               <td>{stu.marks}</td>
//               <td>
//                 <button className="delete-btn" onClick={() => onDelete(index)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))
//         )  : (
//           <tr>
//             <td colSpan="4">No students registered yet</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }

// export default StudentTable;

function StudentTable({ students, onDelete }) {
  return (
    <table border="1" className="student-table">
      <thead>
        <tr>
          <th>Roll</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Marks</th>
          <th>Action</th> {/* New column */}
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.roll}</td>
              <td>{stu.firstName}</td>
              <td>{stu.lastName}</td>
              <td>{stu.marks}</td>
              <td>
                <button className="delete-btn" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No students registered yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;

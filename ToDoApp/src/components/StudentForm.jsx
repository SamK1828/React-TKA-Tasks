// import { useState } from 'react';

// function StudentForm({ onRegister }) {
//   const [student, setStudent] = useState({
//     roll: '',
//     firstName: '',
//     lastName: '',
//     marks: ''
//   });

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setStudent({ ...student, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!student.roll || !student.firstName || !student.lastName || !student.marks) {
//       alert('Please fill all fields!');
//       return;
//     }

//     onRegister(student);
//     setStudent({ roll: '', firstName: '', lastName: '', marks: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <label>Roll:</label>
//       <input
//         type="text"
//         name="roll"
//         value={student.roll}
//         onChange={inputHandler}
//       />

//       <label>First Name:</label>
//       <input
//         type="text"
//         name="firstName"
//         value={student.firstName}
//         onChange={inputHandler}
//       />

//       <label>Last Name:</label>
//       <input
//         type="text"
//         name="lastName"
//         value={student.lastName}
//         onChange={inputHandler}
//       />

//       <label>Marks:</label>
//       <input
//         type="number"
//         name="marks"
//         value={student.marks}
//         onChange={inputHandler}
//       />

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default StudentForm;

import { useState, useEffect } from 'react';

function StudentForm({ onRegister, editData }) {
  const [formData, setFormData] = useState({
    roll: '',
    firstName: '',
    lastName: '',
    marks: ''
  });

  // Auto-fill when edit mode is triggered
  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.roll || !formData.firstName || !formData.lastName || !formData.marks) {
      alert('Please fill all fields');
      return;
    }
    onRegister(formData);
    setFormData({ roll: '', firstName: '', lastName: '', marks: '' }); // clear form
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input name="roll" placeholder="Roll No" value={formData.roll} onChange={handleChange} />
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input name="marks" type="number" placeholder="Marks" value={formData.marks} onChange={handleChange} />

      <button type="submit" className="submit-btn">
        {editData ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;

import { useState } from 'react';

function StudentForm({ onRegister }) {
  const [student, setStudent] = useState({
    roll: '',
    firstName: '',
    lastName: '',
    marks: ''
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!student.roll || !student.firstName || !student.lastName || !student.marks) {
      alert('Please fill all fields!');
      return;
    }

    onRegister(student);
    setStudent({ roll: '', firstName: '', lastName: '', marks: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Roll:</label>
      <input
        type="text"
        name="roll"
        value={student.roll}
        onChange={inputHandler}
      />

      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={student.firstName}
        onChange={inputHandler}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={student.lastName}
        onChange={inputHandler}
      />

      <label>Marks:</label>
      <input
        type="number"
        name="marks"
        value={student.marks}
        onChange={inputHandler}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;

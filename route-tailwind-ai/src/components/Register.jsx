import React from 'react'

function Register() {
  return (
    <div>
        <h3>Register</h3>
        <label>Username :</label> <input type="text" name="username" /><br/>
        <label>Password :</label> <input type="password" name="password" /><br/>
        <label> Age :</label> <input type="number" name="age" /><br/>
        

        <button>Register</button>
      
    </div>
  )
}

export default Register

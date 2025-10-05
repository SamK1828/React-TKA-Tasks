import React from 'react';

function Student({ name, age, city }) {
    return (
        <>
            <h1>This is Function Based Student Component</h1>
            <h2>This is Student Component</h2>
            Name : {name}<br />
            Age : {age} <br />
            City : {city}  <br />

            {/* <div>
                <h3>List of Students</h3>
                <ul>
                    <li></li>
                    <li>Age : {age}</li>
                    <li>City : {city}</li>
                </ul>
            </div> */}
        </>
    )
}

export default Student;
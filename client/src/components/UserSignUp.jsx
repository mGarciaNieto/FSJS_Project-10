import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



function UserSignUp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to the /api/users route
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // If the response is ok, sign in the user
          // You can redirect the user to another route
          // history.push('/');
        }
      })
      .catch((error) => console.error('Error during fetch:', error));
  };

  const handleCancel = () => {
    // Navigate the user to the default route
    // history.push('/');
  };



  return (

    <div className="form--centered">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} />
            <label htmlFor="emailAddress">Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <button className="button" type="submit">Sign Up</button>
            <button className="button button-secondary" onClick={handleCancel} type="button">Cancel</button>
          </form>
          <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
        </div>
  )
}

export default UserSignUp
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignIn() {
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')

	const handleSignIn = (e) => {
		e.preventDefault()
		// Handle the sign-in logic here
		// For example, send a request to the API to authenticate the user
	}

	const handleCancel = () => {}
	return (
		<div className='form--centered'>
			<h2>Sign In</h2>

			<form onSubmit={handleSignIn}>
				<label htmlFor='emailAddress'>Email Address</label>
				<input id='emailAddress' name='emailAddress' type='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
				<label htmlFor='password'>Password</label>
				<input id='password' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				<button className='button' type='submit'>
					Sign In
				</button>
				<button className='button button-secondary' onClick={handleCancel} type='button'>
					Cancel
				</button>
			</form>
			<p>
				Don't have a user account? Click here to <Link to='/signup'>sign up</Link>!
			</p>
		</div>
	)
}

export default UserSignIn

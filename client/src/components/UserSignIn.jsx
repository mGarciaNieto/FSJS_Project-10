import React, { useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function UserSignIn() {
	const { actions } = useContext(AuthContext)
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState([])
	const navigate = useNavigate()
	const location = useLocation()

	const handleSignIn = async (e) => {
		e.preventDefault()
		// Handle the sign-in logic here
		let from = { pathname: '/' }

		if (location.state) {
			from = location.state.from
		}

		const credentials = { emailAddress, password }
		try {
			const user = await actions.signIn(credentials)
			if (!user) {
				setErrors('Sign-in has failed!')
				errors(setErrors)
			} else if (user) {
				navigate(from)
			}
		} catch (error) {
			//console.log(error)
			navigate('/error')
		}
	}

	const handleCancel = () => {
		navigate('/')
	}

	return (
		<div className='form--centered'>
			<h2>Sign In</h2>

			<form onSubmit={handleSignIn}>
				<label htmlFor='emailAddress'>Email Address</label>
				<input id='emailAddress' name='emailAddress' type='email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder='email' />
				<label htmlFor='password'>Password</label>
				<input id='password' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
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

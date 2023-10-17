import React, { useState, useContext, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import ValidatonErrors from './ValidationErrors'

function UserSignIn() {
	const { actions } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()
	const emailAddress = useRef(null)
	const password = useRef(null)
	const [errors, setErrors] = useState([])

	const handleSignIn = async (e) => {
		e.preventDefault()
		// Handle the sign-in logic here
		let from = { pathname: '/' }

		if (location.state) {
			from = location.state.from
		}

		const credentials = { emailAddress: emailAddress.current.value, password: password.current.value }
		console.log(credentials)

		try {
			const user = await actions.signIn(credentials)
			if (!user) {
				setErrors('Sign-in has failed!')
				errors(setErrors)
			} else if (user) {
				navigate(from)
			}
		} catch (error) {
			console.log(error)
			console.log(error.message)
			console.error('Error signing in:', error)
			navigate('/error')
		}
	}

	const handleCancel = () => {
		navigate('/')
	}

	return (
		<div className='form--centered'>
			<h2>Sign In</h2>
			<ValidatonErrors errors={errors} />
			<form onSubmit={handleSignIn}>
				<label htmlFor='emailAddress'>Email Address</label>
				<input id='emailAddress' name='emailAddress' type='email'  ref={emailAddress} placeholder='email' />
				<label htmlFor='password'>Password</label>
				<input id='password' name='password' type='password'  ref={password} placeholder='password' />
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

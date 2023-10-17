import React from 'react'
import { useState, useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidatonErrors from './ValidationErrors'
import { api } from '../utils/apiRequests'
import AuthContext from '../context/AuthContext'

function UserSignUp() {
	const navigate = useNavigate()
	const { actions } = useContext(AuthContext)
	const firstName = useRef('')
	const lastName = useRef('')
	const emailAddress = useRef('')
	const password = useRef('')
	const [errors, setErrors] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault()
		// Handle the sign-up logic here
		const user = {
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			emailAddress: emailAddress.current.value,
			password: password.current.value
		}
		try {
			const response = await api('/users', 'POST', user)
			if (response.status === 201) {
				console.log(`${user.firstName} ${user.lastName} is successfully signed up and authenticated!`)
				const credentials = {
					emailAddress: user.emailAddress,
					password: user.password
				}
				await actions.signIn(credentials)
				navigate('/')
			} else if (response.status === 400) {
				const data = await response.json()
				setErrors(data.errors)
			} else if (response.status === 500) {
				navigate('/error')
			} else {
				throw Error()
			}
		} catch (e) {
			console.log('error signing up', e)
		}
	}

	const handleCancel = () => {
		navigate('/')
	}

	return (
		<div className='form--centered'>
			<h2>Sign Up</h2>
			<ValidatonErrors errors={errors} />
			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input id='firstName' name='firstName' type='text' ref={firstName} placeholder='first name' />
				<label htmlFor='lastName'>Last Name</label>
				<input id='lastName' name='lastName' type='text' ref={lastName} placeholder='last name' />
				<label htmlFor='emailAddress'>Email Address</label>
				<input id='emailAddress' name='emailAddress' type='email' ref={emailAddress} placeholder='email' />
				<label htmlFor='password'>Password</label>
				<input id='password' name='password' type='password' ref={password} placeholder='password' />
				<button className='button' type='submit'>
					Sign Up
				</button>
				<button className='button button-secondary' onClick={handleCancel} type='button'>
					Cancel
				</button>
			</form>
			<p>
				Already have a user account? Click here to <Link to='/signin'>sign in</Link>!
			</p>
		</div>
	)
}

export default UserSignUp

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import  AuthContext  from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

/**
 * The private Route function is accessible to authorised  users
 * Check if the user is authorised
 * Displays the Update and create course button
 * else navigate to signin route for user to log in
 */

/**
 * @function PrivateRoute
 * @param {object} component - component to be rendered
 * @param {object} rest - rest of the props
 * @returns {JSX.Element}
 * @description - if user is authorised, render the component
 * else redirect to signin route
 * @example
 * <PrivateRoute path="/courses/create" element={<CreateCourse />} />
 */
const PrivateRoute = () => {
	const { authUser } = useContext(AuthContext)
	const location = useLocation()

	if (authUser) {
		return <Outlet />
	} else {
		return <Navigate to='signin' state={{ from: location.pathname }} />
	}
}

export default PrivateRoute

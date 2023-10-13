import React from 'react'
import { useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function UserSignOut() {
	const { actions } = useContext(AuthContext)
	useEffect(() => actions.signOut())
	return <Navigate to='/' replace />
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function Header() {
	const liStyle = {
		paddingLeft: '60px'
	}

	const { authUser } = useContext(AuthContext)
	return (
		<header>
			<div className='wrap header--flex'>
				<h1 className='header--logo'>
					<Link to='/'>Courses</Link>
				</h1>
				<nav>
					<ul className='header--signedout'>
						{/* If user is not authenticated, show Sign up  and Sign in links */}
						{authUser === null ? (
							<>
								<li>
									<Link className='signup' to='/signup'>
										Sign up
									</Link>
								</li>
								<li style={liStyle}>
									<Link className='signin' to='/signin'>
										Sign in
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<span>
										Welcome, {authUser.firstName} {authUser.lastName}!
									</span>
								</li>
								<li style={liStyle}>
									<Link className='signout' to='/signout'>
										Sign out
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	)
}

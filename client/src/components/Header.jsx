import { Link } from 'react-router-dom'

export default function Header() {
	const liStyle = {
		paddingLeft: '40px'
	}

	return (
		<header>
			<div className='wrap header--flex'>
				<h1 className='header--logo'>
					<Link to='/'>Courses</Link>
				</h1>
				<nav>
					<ul className='header--signedout'>
						<li>
							<Link to='/signup'>Sign Up</Link>
						</li>
						<li style={liStyle}>
							<Link to='/signin'>Sign In</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<div className='wrap header--flex'>
				<h1 className='header--logo'>
					<Link to='/'>Courses</Link>
				</h1>
				<nav>
					<ul className='header--signedout'>
						<li>Sign Up</li>
						<li>Sign In</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

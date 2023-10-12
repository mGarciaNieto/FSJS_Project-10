import React from 'react'
import myImage from '../img/forbidden.png'

const Forbidden = () => {
	const imgStyle = {
		width: '100%',
		maxWidth: '500px',
		margin: '0 auto'
	}
	return (
		<div className='wrap'>
			<h2>Forbidden</h2>
			<p>Oh oh! You can't access this page.</p>
			<img style={imgStyle} src={myImage} alt='Forbidden access' />
		</div>
	)
}

export default Forbidden

import React from 'react'
import myImage from '../img/pageNotFound_404_error.png'

export const NotFound = () => {
	const imgStyle = {
		width: '100%',
		maxWidth: '500px',
		margin: '0 auto'
	}
	return (
		<div className='wrap'>
			<h2>Not Found</h2>
			<p>Sorry! We couldn't find the page you're looking for.</p>
			<img style={imgStyle} src={myImage} alt='404 Not Found' />
		</div>
	)
}

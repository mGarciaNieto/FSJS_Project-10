import React from 'react'
import myImage from '../img/unexpectedError.png'

export const UnhandledError = () => {
	const imgStyle = {
		width: '100%',
		maxWidth: '500px',
		margin: '0 auto'
	}
	return (
		<div className='wrap'>
			<h2>Error</h2>
			<p>Sorry! We just encountered an unexpected error.</p>
			<img style={imgStyle} src={myImage} alt='unexpected error' />
		</div>
	)
}

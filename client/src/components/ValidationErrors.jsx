import React from 'react'

const ValidationErrors = ({ errors }) => {
	if (errors.length === 0) {
		console.log('No errors')
		// console.error(errors)
		return null
	}
	return (
		<div className='validation-errors'>
			<h3>Validation Errors</h3>
			<ul>
				{errors.map((error, index) => (
					<li key={index}>{error}</li>
				))}
			</ul>
		</div>
	)
}

export default ValidationErrors

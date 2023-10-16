import React from 'react'

const ValidationErrors = ({ errors }) => {
	errors.length === 0 ? null : console.error(errors)
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

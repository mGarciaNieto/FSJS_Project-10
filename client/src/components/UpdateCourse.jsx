import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateCourse = () => {
	const [courseTitle, setCourseTitle] = useState('Build a Basic Bookcase')
	const [courseDescription, setCourseDescription] = useState('')
	const [estimatedTime, setEstimatedTime] = useState('14 hours')
	const [materialsNeeded, setMaterialsNeeded] = useState('')
	const navigate = useNavigate()

	const handleUpdateCourse = (e) => {
		e.preventDefault()
		// Send a PUT request to the API to update the course
		fetch(`/api/courses/:id`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: courseTitle,
				description: courseDescription,
				estimatedTime,
				materialsNeeded
			})
		})
			.then((response) => {
				if (response.ok) {
					// Redirect to the course detail if the course was updated successfully
					navigate(`/courses/${response.data.id}`)
				} else {
					// Handle errors
					return response.json().then((error) => console.error(error))
				}
			})
			.catch((error) => console.error('Error updating course:', error))
	}

	return (
		<div className='wrap'>
			<h2>Update Course</h2>
			<form onSubmit={handleUpdateCourse}>
				<div className='main--flex'>
					<div>
						<label htmlFor='courseTitle'>Course Title</label>
						<input id='courseTitle' name='courseTitle' type='text' value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
						<p>By Joe Smith</p>
						<label htmlFor='courseDescription'>Course Description</label>
						<textarea id='courseDescription' name='courseDescription' value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
					</div>
					<div>
						<label htmlFor='estimatedTime'>Estimated Time</label>
						<input id='estimatedTime' name='estimatedTime' type='text' value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} />
						<label htmlFor='materialsNeeded'>Materials Needed</label>
						<textarea id='materialsNeeded' name='materialsNeeded' value={materialsNeeded} onChange={(e) => setMaterialsNeeded(e.target.value)} />
					</div>
				</div>
				<button className='button' type='submit'>
					Update Course
				</button>
				<button className='button button-secondary' onClick={() => navigate('/courses/${id}')}>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default UpdateCourse

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
	const [courseTitle, setCourseTitle] = useState('')
	const [courseDescription, setCourseDescription] = useState('')
	const [estimatedTime, setEstimatedTime] = useState('')
	const [materialsNeeded, setMaterialsNeeded] = useState('')
	const navigate = useNavigate()

	const handleCreateCourse = (e) => {
		e.preventDefault()
		// Send a POST request to the API to create a new course
		fetch('/api/courses', {
			method: 'POST',
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
					// Redirect to the course list if the course was created successfully
					navigate('/')
				} else {
					// Handle errors
					return response.json().then((error) => console.error(error))
				}
			})
			.catch((error) => console.error('Error creating course:', error))
	}

	return (
		<div className='wrap'>
			<h2>Create Course</h2>
			<form onSubmit={handleCreateCourse}>
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
					Create Course
				</button>
				<button className='button button-secondary' onClick={() => navigate('/')}>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default CreateCourse

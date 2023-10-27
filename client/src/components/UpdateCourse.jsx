import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import ValidatonErrors from './ValidationErrors'
import { api } from '../utils/apiRequests'

const UpdateCourse = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { authUser } = useContext(AuthContext)
	const [course, setCourse] = useState({})
	const [errors, setErrors] = useState([])

	const handleUpdateCourse = async (e) => {
		e.preventDefault()
		// Send a PUT request to the API to update the course
		const data = await api(`/courses/${id}`, 'PUT', course, authUser)
		if (data.status === 204) {
			navigate(`/courses/${id}`)
		} else if (data.status === 400) {
			const res = await data.json()
			setErrors(res.errors)
		} else if (data.status === 404) {
			navigate('/notfound')
		} else if (data.status === 500) {
			navigate('/error')
		} else {
			throw new Error()
		}
		e.target.reset()
	}

	useEffect(() => {
		const getCourses = async () => {
			const data = await api(`/courses/${id}`, 'GET', null)
			if (data.status === 200) {
				const course = await data.json()
				if (authUser?.id !== course?.userId) {
					navigate('/forbidden')
				} else {
					setCourse(course)
				}
			} else if (data.status === 404) {
				navigate('/notfound')
			} else if (data.status === 500) {
				navigate('/error')
			}
		}

		getCourses().catch(console.error)
	}, [id, navigate, authUser?.id])

	return (
		<div className='wrap'>
			<h2>Update Course</h2>
			<ValidatonErrors errors={errors} />
			<form onSubmit={handleUpdateCourse}>
				<div className='main--flex'>
					<div>
						<label htmlFor='courseTitle'>Course Title</label>
						<input id='courseTitle' name='courseTitle' type='text' value={course.title || ''} onChange={(e) => setCourse({ ...course, title: e.target.value })} />
						<p>
							By {course.User?.firstName} {course.User?.lastName}
						</p>
						<label htmlFor='courseDescription'>Course Description</label>
						<textarea id='courseDescription' name='courseDescription' value={course.description || ''} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
					</div>
					<div>
						<label htmlFor='estimatedTime'>Estimated Time</label>
						<input id='estimatedTime' name='estimatedTime' type='text' value={course.estimatedTime || ''} onChange={(e) => setCourse({ ...course, estimatedTime: e.target.value })} />
						<label htmlFor='materialsNeeded'>Materials Needed</label>
						<textarea id='materialsNeeded' name='materialsNeeded' value={course.materialsNeeded || ''} onChange={(e) => setCourse({ ...course, materialsNeeded: e.target.value })} />
					</div>
				</div>
				<button className='button' type='submit'>
					Update Course
				</button>
				<button className='button button-secondary' onClick={() => navigate(`/courses/${course.id}`)}>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default UpdateCourse

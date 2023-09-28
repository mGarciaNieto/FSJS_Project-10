import React, { useState, useEffect, Fragment } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function CourseDetail() {
	const [course, setCourse] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`http://localhost:5000/api/courses/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setCourse({
					...data,
					authorName: `${data.user.firstName} ${data.user.lastName}`
				})
			})
			.catch((error) => console.error('Error fetching course details:', error))
	}, [id])

	const handleDelete = () => {
		fetch(`/api/courses/${id}`, { method: 'DELETE' })
			.then(() => navigate('/'))
			.catch((error) => console.error('Error deleting course:', error))
	}

	return (
		<Fragment>
			<div className='actions--bar'>
				<div className='wrap'>
					<Link className='button' to={`/courses/${id}/update`}>
						Update Course
					</Link>
					<button className='button' onClick={handleDelete}>
						Delete Course
					</button>
					<Link className='button button-secondary' to='/'>
						Return to List
					</Link>
				</div>
			</div>
			<div className='wrap'>
				<h2>Course Detail</h2>
				<div className='main--flex'>
					<div>
						<h3 className='course--detail--title'>Course</h3>
						<h4 className='course--name'>{course.title}</h4>
						<p>By {course.authorName}</p>
						<p>{course.description}</p>
					</div>
					<div>
						<h3 className='course--detail--title'>Estimated Time</h3>
						<p>{course.estimatedTime}</p>
						<h3 className='course--detail--title'>Materials Needed</h3>
						<ul className='course--detail--list'>{course.materialsNeeded && course.materialsNeeded.split('\n').map((material, index) => <li key={index}>{material}</li>)}</ul>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default CourseDetail

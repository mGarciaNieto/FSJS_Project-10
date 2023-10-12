import React, { useState, useEffect, Fragment, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { fetchCourseDetail } from '../utils/apiRequests'
import AuthContext from '../context/AuthContext'
import ReactMarkdown from 'react-markdown'

function CourseDetail() {
	const [course, setCourse] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	const { authUser } = useContext(AuthContext)

	useEffect(() => {
		// Fetch course detail data when component is mounted
		fetchCourseDetail(id)
			.then((data) => setCourse(data))
			.catch((error) => {
				console.error(error)
				error.status === 404 ? navigate('/notfound') : navigate('/error')
			})
	}, [id])

	const handleDelete = () => {
		fetch(`/ap/courses/${id}`, { method: 'DELETE' })
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
					<Link className='button' onClick={handleDelete} to='/'>
						Delete Course
					</Link>
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
						<p>
							<ReactMarkdown>{course.description}</ReactMarkdown>
						</p>
					</div>
					<div>
						<h3 className='course--detail--title'>Estimated Time</h3>
						<p>{course.estimatedTime}</p>
						<h3 className='course--detail--title'>Materials Needed</h3>
						<p className='course--detail--list'>{course.materialsNeeded && course.materialsNeeded.split('\n').map((material, index) => <ReactMarkdown key={index}>{material}</ReactMarkdown>)}</p>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default CourseDetail

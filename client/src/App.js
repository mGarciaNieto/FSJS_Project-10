import logo from './logo.svg'
import './App.css'

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
// 					Learn React
// 				</a>
// 			</header>
//       <section>
//         <h1>Section 1</h1>
//       </section>
// 		</div>
// 	)
// }

import React, { useState, useEffect } from 'react'

function App() {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		// Fetch the list of courses from the REST API
		fetch('http://localhost:5000/api/courses') // Adjust the endpoint if it's different
			.then((response) => response.json())
			.then((data) => setCourses(data))
			.catch((error) => console.error('Error fetching courses:', error))
	}, [])

	return (
		<div className='App'>
			<h1>Courses</h1>
			<ul>
				{courses.map((course) => (
					<li key={course.id}>{course.title}</li> // Adjust based on your course object structure
				))}
			</ul>
		</div>
	)
}

export default App

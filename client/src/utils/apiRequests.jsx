/*
 * This file contains the functions to fetch data from the API.
 */

const API_URL = 'http://localhost:5000/api' // Base URL of your REST API

// Function to fetch all courses
export const fetchCourses = async () => {
	try {
		const response = await fetch(`${API_URL}/courses`)
		if (response.ok) {
			const data = await response.json()
			return data
		} else {
			throw new Error('Error fetching courses')
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}

// Function to fetch details of a specific course by ID
export const fetchCourseDetail = async (id) => {
	try {
		const response = await fetch(`${API_URL}/courses/${id}`)
		if (response.ok) {
			const data = await response.json()
			data.authorName = `${data.user.firstName} ${data.user.lastName}`
			return data
		} else {
			const error = new Error('Network response was not ok')
			error.status = response.status
			throw error
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const api = (path, method = 'GET', body = null, credentials = null) => {
	const url = `${API_URL}${path}`

	const options = {
		method: method,
		headers: {}
	}

	if (body) {
		options.body = JSON.stringify(body)
		options.headers['Content-Type'] = 'application/json; charset=utf-8'
	}

	if (credentials) {
		const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`)
		options.headers.Authorization = `Basic ${encodedCredentials}`
	}

	return fetch(url, options)
}

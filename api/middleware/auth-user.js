'use strict'

const auth = require('basic-auth')
const { User } = require('../models')
const bcrypt = require('bcryptjs')

/**
 * Middleware to authenticate the request using Basic Authentication.
 * @param { Request } req - The Express Request object.
 * @param { Response } res - The Express Response object.
 * @param { Function } next - The function to call to pass execution to the next middleware.
 */
exports.authenticateUser = async (req, res, next) => {
	let message
	const credentials = auth(req)

	if (credentials) {
		const user = await User.findOne({ where: { emailAddress: credentials.name } })

		console.log('User found:', user)

		if (user) {
			const authenticated = bcrypt.compareSync(credentials.pass, user.password)
			console.log(user.password)
			console.log('Password received:', credentials.pass)
			console.log('Password stored:', user.password)
			console.log('Authenticated:', authenticated)

			if (authenticated) {
				console.log(`Authentication successful for username: ${user.emailAddress}`)
				// Store the user on the Request object.
				req.currentUser = user
			} else {
				message = `Authentication failure for username: ${user.emailAddress}`
			}
		} else {
			message = `User not found for name: ${credentials.name}`
		}
	} else {
		message = 'Auth header not found'
	}

	// If authenticate fails, return 401 HTTP status code and message.
	if (message) {
		console.warn(message)
		res.status(401).json({ message: 'Access Denied' })
	} else {
		next()
	}
}

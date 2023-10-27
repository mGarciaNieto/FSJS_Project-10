'use strict'

const express = require('express')
const { asyncHandler } = require('../middleware/async-handler')
const { User } = require('../models')
const { authenticateUser } = require('../middleware/auth-user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get(
	'/users',
	authenticateUser,
	asyncHandler(async (req, res) => {
		const user = req.currentUser
		res.status(200).json({
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			emailAddress: user.emailAddress
		})
	})
)

router.post(
	'/users',
	asyncHandler(async (req, res) => {
		try {
			// if (req.body.password) {
			// 	req.body.password = bcrypt.hashSync(req.body.password, 10)
			// }
			await User.create(req.body)
			res.status(201).location('/').end()
		} catch (error) {
			if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
				const errors = error.errors.map((err) => err.message)
				res.status(400).json({ errors })
			} else {
				throw error
			}
		}
	})
)

module.exports = router

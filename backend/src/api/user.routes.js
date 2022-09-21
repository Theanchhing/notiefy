const express = require('express')
const router = express.Router()

const { User } = require('../db/models')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         first_name:
 *           type: string
 *           description: The user's firstname.
 *           example: John
 *         last_name:
 *           type: string
 *           description: The user's lastname.
 *           example: John
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: example@email.com
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users.
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/',async(req,res) => {
	try {
		const users = await User.findAll()
		res.json({users:users})
	}
	catch(err) {
		console.error(err.message)
	}
})

module.exports = router

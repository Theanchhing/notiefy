const { object, string, TypeOf, array } = require('zod')

const createCategorySchema = object({
	body: object({
		name: string({
			required_error: 'Name is required'
		}),
		color: string({
			required_error: 'Color is required'
		}),
		user: string({
			required_error: 'User is required'
		}),
	})
})

module.exports = { createCategorySchema }

const { object, string, TypeOf, array } = require('zod')

const createUserSchema = object({
	body: object({
		fullname: string({
			required_error: 'Name is required'
		}),
		email: string({
			required_error: 'Phone Number is required'
		}),
	})
})

module.exports = {createUserSchema}
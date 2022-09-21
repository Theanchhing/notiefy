const swaggerJsdoc = require('swagger-jsdoc')

const swaggerDefinition = {
	openapi: '3.0.2',
	info: {
		title: 'Express API for Notiefy',
		version: '1.0.0',
		description:
        'This is a REST API application made with Express.'
	},
	servers: [
		{
			'url': 'http://backend.notiefy.localhost',
			'description': 'The development API server',
		},
	]
}
const options = {
	swaggerDefinition,
	// Paths to files containing OpenAPI definitions
	apis: ['src/api/*routes.js'],
}
const swaggerSpec = swaggerJsdoc(options)

module.exports = {
	'swaggerSpec': swaggerSpec
}

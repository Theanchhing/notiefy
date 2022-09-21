
const upload = require('../middleware/upload')
const categoryRoute = require('../api/consumer/category.api')
const userRoute = require('../api/consumer/user.api')
const todoRoute = require('../api/consumer/todo.api')
const noteRoute = require('../api/consumer/todo.api')

function routes(app) {
	app.get('/healthcheck', (req, res) => {
		return res.sendStatus(200)
	})

	app.post('/upload', upload, (req, res) => {
		if (!req.file) {
			return res.status(400).send({ msg: 'no file' })
		}
		return res.send(200)
	})

	app.use('/api/user', userRoute)
	app.use('/api/category', categoryRoute)
	app.use('/api/todo', todoRoute)
	app.use('/api/note', noteRoute)
}

module.exports = routes
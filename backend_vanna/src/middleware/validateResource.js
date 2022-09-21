const validate = (schema) => (req, res, next) => {
	console.log( req.body)
	try {
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params,
		})
		next()
	} catch (e) {
		return res.status(400).send(e)
	}
}

module.exports = validate
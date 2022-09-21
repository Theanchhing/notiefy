const { findUser } = require('../services/user.service')

const deserializeUser = async (req, res, next) => {

	let userId = req.session.getUserId()

	const decoded = await findUser({ _id: userId })

	if (decoded) {
		res.locals.user = decoded
		return next()
	} else {
		return res.sendStatus(403)
	}
}

module.exports = { deserializeUser }
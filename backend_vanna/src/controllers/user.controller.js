const { findUsers } = require('../services/user.service')

async function getUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}


async function getOwnUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}


async function patchOwnUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}


async function postUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}

async function patchUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}

async function deleteUserHandler(req, res) {
	const body = req.body
	const user = await findUsers(body)
	return res.send(user)
}

module.exports = { getUserHandler, getOwnUserHandler, patchOwnUserHandler, patchUserHandler, postUserHandler, deleteUserHandler }

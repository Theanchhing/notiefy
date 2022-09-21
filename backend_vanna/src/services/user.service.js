const UserModel = require('../models/category.model')


module.exports = async function createUser(input) {
	return UserModel.create(input)
}

module.exports = async function findUser(query) {
	return UserModel.findOne(query).lean()
}

module.exports = async function findAndUpdateUser(query, update, options){
	return UserModel.findOneAndUpdate(query, update, options)
}

module.exports = async function findUsers(query, options = { lean: true }) {
	return UserModel.find(query, {}, options).lean()
}

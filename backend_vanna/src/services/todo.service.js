const TodoModel = require('../models/category.model')


async function createTodo(input) {
	return TodoModel.create(input)
}

async function findTodo(query) {
	return TodoModel.findOne(query).lean()
}

async function findAndUpdateTodo(query, update, options) {
	return TodoModel.findOneAndUpdate(query, update, options)
}

async function findTodos(query, options = { lean: true }) {
	return TodoModel.find(query, {}, options).lean()
}

async function deleteTodo(query) {
	return TodoModel.deleteOne(query)
}

module.exports = { createTodo, findTodo, findAndUpdateTodo, findTodos, deleteTodo }
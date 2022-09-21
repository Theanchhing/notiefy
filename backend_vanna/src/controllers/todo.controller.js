const {createTodo, findTodo, findAndUpdateTodo, deleteTodo, findTodos}  = require('../services/todo.service')

async function getTodoHandler(req, res) {
	const userId = res.locals.user._id
	const categories = await findTodos({user: userId})
	return res.send(categories)
}


async function postTodoHandler(req, res) {
	const userId = res.locals.user._id
	const body = req.body
	const todo = await createTodo({... body, user: userId})
	return res.send(todo)
}

async function patchTodoHandler(req, res) {
	const todo_id = req.params
	const body = req.body
	const todo = await findAndUpdateTodo({_id: todo_id}, {... body})
	return res.send(todo)
}

async function deleteTodoHandler(req, res) {
	const todo_id = req.params
	const todo = await deleteTodo({todo_id})
	return res.send(todo)
}

module.exports = { getTodoHandler, patchTodoHandler, postTodoHandler, deleteTodoHandler }

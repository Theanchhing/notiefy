const Router = require('express')
const validate = require('../../middleware/validateResource')
const { createTodoSchema } = require('../../schema/todo.schema')
const { getTodoHandler, patchTodoHandler, postTodoHandler, deleteTodoHandler } = require('../../controllers/todo.controller')
const { requireUser } = require('../../middleware/requireUser')

const todoRoute = Router()

todoRoute.get('/', requireUser, getTodoHandler)
todoRoute.patch('/:idTodo', requireUser, patchTodoHandler)
todoRoute.post('/', [requireUser, validate(createTodoSchema)], postTodoHandler)
todoRoute.delete('/:idTodo', requireUser, deleteTodoHandler)

module.exports = todoRoute

import uuid from 'uuid'

import { computed, action, thunk, debug } from 'easy-peasy'

export default {
	todos: [
		{id: uuid.v4(), title: 'test1',done: false, description: 'text description',content: 'text lorem ipsum'},
		{id: uuid.v4(), title: 'test2',done: false, description: 'text description',content: 'text lorem ipsum'}

	],
	completeTodo: action((state, payload) => {
		state.todos = state.todos.map(todo => {
			if (todo.id === payload) {
				todo.done = true
			}
			return todo
		})
	}),
	addTodo: action((state, payload) => {
		state.todos.push(payload)
	}),
	deleteTodo: action((state, payload) => {
		state.todos = state.todos.filter(x => x.id !== payload)
	}),
	saveTodo: thunk(async (actions, payload) => {
		// const { data } = await axios.post('/todos', payload)
		actions.addTodo(data)
	})
}

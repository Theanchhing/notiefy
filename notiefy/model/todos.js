import uuid from 'uuid'

import { computed, action, thunk, debug } from 'easy-peasy'

export default {
	todos: [
		{id: uuid.v4(), title: 'My Checklist 1', done: false, items: [{checked: false, content: 'task 1'}, {checked: false, content: 'task 2'}, {checked: false, content: 'task 3'}]},
		{id: uuid.v4(), title: 'My Checklist 2', done: false, items: [{checked: false, content: 'test content'}, {checked: false, content: 'testing task'}]},
		{id: uuid.v4(), title: 'Dinner food', done: false, items: [{checked: false, content: 'Curry'}, {checked: true, content: 'Salad'}, {checked: false, content: 'Hard-boiled eggs'}, {checked: false, content: 'Fish'}]},

	],
	completeTodo: action((state, payload) => {
		state.todos = state.todos.map(todo => {
			if (todo.id === payload) {
				todo.done = true
			}
			return todo
		})
	}),
	inCompleteTodo: action((state, payload) => {
		state.todos = state.todos.map(todo => {
			if (todo.id === payload) {
				todo.done = false
			}
			return todo
		})
	}),
	addTodo: action((state, payload) => {
		console.log(payload)
		let myTodo = {id: uuid.v4(), title: payload.title, done: false, items: payload.items}
		state.todos.push(myTodo)
	}),
	deleteTodo: action((state, payload) => {
		state.todos = state.todos.filter(x => x.id !== payload)
	}),
	saveTodo: thunk(async (actions, payload) => {
		// const { data } = await axios.post('/todos', payload)
		actions.addTodo(data)
	}),
	deleteItem: action((state, payload) => {
		console.log('id', payload.id, '\n','content:', payload.cont, '\n')
		state.todos.map((todo) => console.log(todo.id))
		// let temp = state.todos.find((todo) => todo.id === payload.id)
		// console.log(temp)
		// temp.items.splice(payload.index, 1)
		state.todos = state.todos.map((todo) => {
			if (todo.id === payload.id) {
				// todo.items = todo.items.splice(payload.index, 1)
				todo.items = todo.items.filter(item => item.content !== payload.cont)
				console.log(todo.items)
			}
			return todo
		})
		// temp.items.filter((item) => indexOf(item.content) !== cont)
		// console.log(temp)
	})
}

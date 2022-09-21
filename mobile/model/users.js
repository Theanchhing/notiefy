import { computed, action } from 'easy-peasy'

export default {
	users: [
		{username: 'ysk', password: 'pass', displayName: 'name for display', email: 'user@email.com'}
	],
	completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),
	addTodo: action((state, payload) => {
		state.todos.push(payload)
	})
}

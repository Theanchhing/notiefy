import { action, computed } from 'easy-peasy'
import uuid from 'uuid'
export default {
	notes: [
		{id: uuid.v4(), title: 'test1', pinned: false, category: 'test', description: 'abcde'},
		{id: uuid.v4(), title: 'test2', pinned: true, category: 'test', description: 'abcde'},
		{id: uuid.v4(), title: 'test3', pinned: false, category: 'test', description: 'abcde'},

	],
	pinnedNotes: computed((state) => state.notes.filter(note => note.pinned)),
	setNote: action((state, notes) => {
		state.notes = notes
	}),
	addNote: action((state, note) => {
		note.id = uuid.v4()
		state.notes.push(note)
	}),
	toggleNote: action((state, id) => {
		state.notes.forEach((note) => {
			return note.id === id ? (note.completed = !note.completed) : note
		})
	}),
	removeNote: action((state, id) => {
		state.notes = state.notes.filter((note) => note.id !== id)
	})
}

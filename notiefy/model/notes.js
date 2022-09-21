import { action, computed } from 'easy-peasy'
import uuid from 'uuid'
const randColor = ['green', 'orange', 'green', 'cyan', 'blue', 'red', 'yellow', '#57926F']
export default {
	notes: [
		{
			id: uuid.v4(),
			isPinned: false,
			colors: 'green',
			title: 'Machine Learning',
			detail:
		  'Machine learning (ML) is a type of artificial intelligence (AI)that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.',
		  last_updated: Date.now()
		},
		{
			id: uuid.v4(),
			isPinned: true,
			colors: 'orange',
			title: 'Future of machine learning test test?',
			detail:
		  'While machine learning algorithms have been around for decades, they\'ve attained new popularity as artificial intelligence has grown in prominence. Deep learning models, in particular, power today\'s most advanced AI applications.',
		  last_updated: Date.now()
		},
		{
			id: uuid.v4(),
			isPinned: false,
			colors: 'red',
			title: 'Pressable',
			detail:
		  'Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children. \'onPressIn\' is called when a press is activated.\'onPressOut\' is called when the press gesture is deactivated.',
		  last_updated: Date.now()
		},
		{
			id: uuid.v4(),
			isPinned: false,
			colors: '#57926F',
			title: 'Modal',
			detail:
		  'The Modal component is a basic way to present content above an enclosing view. The \'animationType\' prop controls how the modal animates. \'slide\' slides in from the bottom, \'fade\' fades into view, \'none\' appears without an animation.',
		  last_updated: Date.now()
		},
	],
	pinnedNotes: computed((state) => state.notes.filter(note => note.isPinned)),
	pinNote: action((state, payload) => {
		state.notes = state.notes.map(note => {
			if (note.id === payload) {
				note.isPinned = true
				note.last_updated = Date.now()
			}
			return note
		})
	}),
	UnPinNote: action((state, payload) => {
		state.notes = state.notes.map(note => {
			if (note.id === payload) {
				note.isPinned = false
				note.last_updated = Date.now()
			}
			return note
		})
	}),
	addNote: action((state, note) => {
		let tmp = {
			id : uuid.v4(),
			title: note.title,
			detail: note.content,
			isPinned: false,
			last_updated: Date.now(),
			colors: randColor[Math.floor(Math.random() * randColor.length)]
		}
		state.notes.push(tmp)
	}),
	updateNote: action((state, payload) => {
		state.notes = state.notes.map(note => {
			if (note.id === payload.id) {
				note.detail = payload.content
				note.title = payload.title
				note.last_updated = Date.now()
			}
			return note
		})
	}),
	removeNote: action((state, id) => {
		state.notes = state.notes.filter((note) => note.id !== id)
	})
}

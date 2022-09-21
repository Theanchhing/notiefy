const {createNote, findNote, findAndUpdateNote, deleteNote, findCategories}  = require('../services/note.service')

async function getNoteHandler(req, res) {
	const userId = res.locals.user._id
	const categories = await findCategories({user: userId})
	return res.send(categories)
}


async function postNoteHandler(req, res) {
	const userId = res.locals.user._id
	const body = req.body
	const note = await createNote({... body, user: userId})
	return res.send(note)
}

async function patchNoteHandler(req, res) {
	const note_id = req.params
	const body = req.body
	const note = await findAndUpdateNote({_id: note_id}, {... body})
	return res.send(note)
}

async function deleteNoteHandler(req, res) {
	const note_id = req.params
	const note = await deleteNote({note_id})
	return res.send(note)
}

module.exports = { getNoteHandler, patchNoteHandler, postNoteHandler, deleteNoteHandler }

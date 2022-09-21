const NoteModel = require('../models/category.model')


async function createNote(input) {
	return NoteModel.create(input)
}

async function findNote(query) {
	return NoteModel.findOne(query).lean()
}

async function findAndUpdateNote(query, update, options) {
	return NoteModel.findOneAndUpdate(query, update, options)
}

async function findCategories(query, options = { lean: true }) {
	return NoteModel.find(query, {}, options).lean()
}

async function deleteNote(query) {
	return NoteModel.deleteOne(query)
}

module.exports = { createNote, findNote, findAndUpdateNote, findNotes, deleteNote }
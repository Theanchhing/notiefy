const Router = require('express')
const validate = require('../../middleware/validateResource')
const { createNoteSchema } = require('../../schema/note.schema')
const { getNoteHandler, patchNoteHandler, postNoteHandler, deleteNoteHandler } = require('../../controllers/note.controller')
const { requireUser } = require('../../middleware/requireUser')

const noteRoute = Router()

noteRoute.get('/note', requireUser, getNoteHandler)
noteRoute.patch('/note/:idNote', requireUser, patchNoteHandler)
noteRoute.post('/note', [requireUser, validate(createNoteSchema)], postNoteHandler)
noteRoute.delete('/note/:idNote', requireUser, deleteNoteHandler)

module.exports = noteRoute

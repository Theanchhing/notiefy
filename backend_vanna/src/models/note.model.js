
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
	{
		file: { type: String, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		isPinned: { type: String, required: true },
		isDeleted: { type: String },
		isArchived: { type: String },
	},
	{
		timestamps: true
	}
)

const NoteModel = mongoose.model('Note', noteSchema)

export default NoteModel
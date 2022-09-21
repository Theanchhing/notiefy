
import mongoose from 'mongoose'


const todoSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		isArchived: { type: String, required: true },
		items: [{type: String}]
	},
	{
		timestamps: true
	}
)

const TodoModel = mongoose.model('Todo', todoSchema)

export default TodoModel
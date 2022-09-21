const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		color: { type: String, required: true },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true
	}
)

const CategoryModel = mongoose.model('Category', categorySchema)

module.exports = CategoryModel

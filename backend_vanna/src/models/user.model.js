
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		fullname: { type: String, required: true },
		profile: { type: String },
		email: { type: String },
	},
	{
		timestamps: true
	}
)

const UserModel = mongoose.model('User', userSchema)

export default UserModel
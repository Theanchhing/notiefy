const Router = require('express')
const validate = require('../../middleware/validateResource')
const { getOwnUserHandler, patchOwnUserHandler } = require('../../controllers/user.controller')
const { requireUser } = require('../../middleware/requireUser')

const userRoute = Router()

userRoute.get('/me', requireUser, getOwnUserHandler)
userRoute.patch('/me', requireUser, patchOwnUserHandler)

module.exports = userRoute

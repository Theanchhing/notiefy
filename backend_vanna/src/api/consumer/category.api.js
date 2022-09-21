const Router = require('express')
const validate = require('../../middleware/validateResource')
const { createCategorySchema } = require('../../schema/category.schema')
const { getCategoryHandler, patchCategoryHandler, postCategoryHandler, deleteCategoryHandler } = require('../../controllers/category.controller')
const { requireUser } = require('../../middleware/requireUser')

const categoryRoute = Router()

categoryRoute.get('/category', requireUser, getCategoryHandler)
categoryRoute.patch('/category/:idCategory', requireUser, patchCategoryHandler)
categoryRoute.post('/category', [requireUser, validate(createCategorySchema)], postCategoryHandler)
categoryRoute.delete('/category/:idCategory', requireUser, deleteCategoryHandler)

module.exports = categoryRoute

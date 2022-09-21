const {createCategory, findCategory, findAndUpdateCategory, deleteCategory, findCategories}  = require('../services/category.service')

async function getCategoryHandler(req, res) {
	const userId = res.locals.user._id
	const categories = await findCategories({user: userId})
	return res.send(categories)
}


async function postCategoryHandler(req, res) {
	const userId = res.locals.user._id
	const body = req.body
	const category = await createCategory({... body, user: userId})
	return res.send(category)
}

async function patchCategoryHandler(req, res) {
	const category_id = req.params
	const body = req.body
	const category = await findAndUpdateCategory({_id: category_id}, {... body})
	return res.send(category)
}

async function deleteCategoryHandler(req, res) {
	const category_id = req.params
	const category = await deleteCategory({category_id})
	return res.send(category)
}

module.exports = { getCategoryHandler, patchCategoryHandler, postCategoryHandler, deleteCategoryHandler }

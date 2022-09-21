const CategoryModel = require('../models/category.model')


async function createCategory(input) {
	return CategoryModel.create(input)
}

async function findCategory(query) {
	return CategoryModel.findOne(query).lean()
}

async function findAndUpdateCategory(query, update, options) {
	return CategoryModel.findOneAndUpdate(query, update, options)
}

async function findCategories(query, options = { lean: true }) {
	return CategoryModel.find(query, {}, options).lean()
}

async function deleteCategory(query) {
	return CategoryModel.deleteOne(query)
}

module.exports = { createCategory, findCategory, findAndUpdateCategory, findCategories, deleteCategory }
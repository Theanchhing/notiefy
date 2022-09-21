module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			username: 'JohnDoe',
			profile: 'JohnDoe',
			email: 'phansovanna18@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date()
		}])
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {})
	}
}

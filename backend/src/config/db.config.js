require('dotenv').config()

module.exports = {
	'development': {
		'username': 'postgres',
		'password': 'postgres',
		'database': 'db-dev',
		'host': 'database',
		'dialect': 'postgres'
	}
}

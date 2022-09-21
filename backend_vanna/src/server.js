require('dotenv').config()

const express = require('express')

const morgan = require('morgan')
const helmet = require('helmet')
const createError = require('http-errors')
const swaggerUi = require('swagger-ui-express')
const supertokens = require('supertokens-node')
const Session = require('supertokens-node/recipe/session')
const mongoose = require('mongoose')
const { dbUri, host, port } = require('./config/index')
// const ThirdPartyPasswordless = require('supertokens-node/recipe/thirdpartypasswordless')

//swagger definition
const { swaggerSpec } = require('./doc')

// supertoken auth
const ThirdPartyPassword = require('supertokens-node/recipe/thirdpartyemailpassword')
const { middleware, errorHandler } = require('supertokens-node/framework/express')
const routes = require('./routes')

const { Google } = ThirdPartyPassword

const {deserializeUser} = require('./middleware/deserializeUser')

const app = express()

routes(app)
app.use(morgan('short')) // HTTP request logger middleware
app.use(express.json()) // parses incoming requests with JSON
app.use(express.urlencoded({ extended: false }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(middleware())
app.use(helmet()) // HTTP headers protect
app.use(errorHandler())
app.use(function (req, res, next) {
	next(createError(404, 'Api not found'))
})

app.use(deserializeUser)

supertokens.init({
	framework: 'express',
	supertokens: {
		// try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
		connectionURI: 'http://supertokens:3567',
		// apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
	},
	appInfo: {
		// learn more about this on https://supertokens.com/docs/session/appinfo
		appName: 'notiefy',
		apiDomain: 'notiefy.localhost',
		websiteDomain: 'notiefy.localhost',
		apiBasePath: '/auth',
		websiteBasePath: '/'
	},
	recipeList: [
		ThirdPartyPassword.init({
			emailVerificationFeature: {
				mode: 'REQUIRED'
			},
			flowType: 'USER_INPUT_CODE_AND_MAGIC_LINK',
			contactMethod: 'EMAIL_OR_PHONE',
			providers: [
				Google({
					clientId: '92492881351-o3teten3v1jd5skic80d1lmm3rn413ok.apps.googleusercontent.com',
					clientSecret: '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'
				})
			],
		}),
		Session.init()
	]
})

server = app.listen(port, async () => {
	console.log(`App is running at ${host}:${port}`)
	try {
		await mongoose.connect(dbUri)
		console.log('DB connected')
	} catch (error) {
		console.log('DB can\'t connect')
		process.exit(1)
	}
	console.log(`App started on port ${port}`)

})

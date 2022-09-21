const multer = require('multer')
const Minio = require('minio')
const multerMinio = require('multer-minio-storage-engine')
const { minio_accessKey, minio_secretKey } = require('../config')

const maxSize = 1 * 1024 * 1024

var minioClient = new Minio.Client({
	endPoint: 'localhost',
	port: 9000,
	useSSL: false,
	accessKey: minio_accessKey,
	secretKey: minio_secretKey
})

const upload = multer({
	storage: multerMinio({
		minio: minioClient,
		bucketName: 'some-bucket',
		metaData: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname })
		},
		key: function (req, file, cb) {
			cb(null, Date.now().toString())
		},
	}),
	limits: { fileSize: maxSize },
}).single('image')


module.exports = upload

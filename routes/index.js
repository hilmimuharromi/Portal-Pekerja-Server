const express = require('express')
const router = express.Router()
const pekerja = require('./pekerja')


router.use('/pekerja',pekerja)

module.exports = router
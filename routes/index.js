const express = require('express')
const router = express.Router()
const pekerja = require('./pekerja')
const profile = require('./profile')


router.use('/pekerja', pekerja)
router.use('/profile', profile)

module.exports = router
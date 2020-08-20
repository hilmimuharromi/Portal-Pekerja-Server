const express = require('express')
const router = express.Router()
const pekerja = require('./pekerja')
const favorite = require('./favorite')
const profile = require('./profile')


router.use('/pekerja', pekerja)
router.use('/favorite', favorite)
router.use('/profile', profile)

module.exports = router
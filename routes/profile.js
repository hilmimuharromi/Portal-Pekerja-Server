const express = require('express')
const router = express.Router()
const {
    create,
    getProfile
} = require('../controllers/profileController')


router.post('/', create)
router.get('/:pekerja', getProfile)

module.exports = router
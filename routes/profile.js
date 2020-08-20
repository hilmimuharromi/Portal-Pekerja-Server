const express = require('express')
const router = express.Router()
const {
    getAll,
    getByUsername,
    updateProfile
} = require('../controllers/profileController')

const {
    addPengalaman
} = require('../controllers/pengalamanController')


router.get('/', getAll)
router.put('/:username', updateProfile)
router.get('/:username', getByUsername)
router.post('/pengalaman/:username', addPengalaman)

module.exports = router
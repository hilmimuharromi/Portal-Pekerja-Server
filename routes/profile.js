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

const {
    addKarya
} = require('../controllers/karyaController')

const {
    addPendidikan
} = require('../controllers/pendidikanController')


router.get('/', getAll)
router.put('/:username', updateProfile)
router.get('/:username', getByUsername)
router.post('/pengalaman/:username', addPengalaman)
router.post('/karya/:username', addKarya)
router.post('/pendidikan/:username', addPendidikan)

module.exports = router
const express = require('express')
const router = express.Router()
const {
    getFavorite
} = require('../controllers/favoriteController')

router.get('/:username', getFavorite)
// router.post('/')
// router.put('/pekerja')
// router.delete('/pekerja')

module.exports = router
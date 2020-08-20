const express = require('express')
const router = express.Router()
const {
    getAll,
    getByUserName,
    loginPekerja,
    registerPekerja
} = require('../controllers/pekerjaController')

router.get('/', getAll)

router.get('/:username', getByUserName)

router.post('/login', loginPekerja)

router.post('/register', registerPekerja)

router.put('/:id', (req, res, next) => {
    res.status(200).json('update pekerja')
})

router.delete('/:id', (req, res, next) => {
    res.status(200).json('delete pekerja')
})

module.exports = router
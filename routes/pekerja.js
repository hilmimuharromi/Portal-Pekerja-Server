const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json('get pekerja')
})

router.post('/login', (req, res, next) => {
    res.status(200).json('login pekerja')
})

router.post('/register', (req, res, next) => {
    res.status(200).json('register pekerja')
})

router.put('/:id', (req, res, next) => {
    res.status(200).json('update pekerja')
})

router.delete('/:id', (req, res, next) => {
    res.status(200).json('delete pekerja')
})

module.exports = router
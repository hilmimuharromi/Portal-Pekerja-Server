const express = require('express')
const router = express.Router()

const {
    loginPekerja,
    registerPekerja
} = require('../controllers/pekerjaController')



router.post('/login', loginPekerja)
router.post('/register', registerPekerja)



module.exports = router
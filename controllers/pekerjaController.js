const Pekerja = require('../models/pekerja')
const Profile = require('../models/profile')

async function getAll(req, res, next) {
    try {
        const result = await Pekerja.find({})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json('error bos')
    }
}

async function getByUserName(req, res, next) {
    try {
        const {
            username
        } = req.params
        const result = await Pekerja.findOne({
            username
        }).populate('profile').exec()
        if (result) {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

async function registerPekerja(req, res, next) {
    try {
        const {
            username,
            email,
            password
        } = req.body
        const readyPekerja = await Pekerja.findOne({
            username
        })

        if (readyPekerja) {
            res.status(400).json('username is ready')
        } else {
            const result = await Pekerja.create({
                username,
                email,
                password
            })
            res.status(200).json(result)
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

async function loginPekerja(req, res, next) {
    try {
        const {
            email,
            password
        } = req.body
        const result = await Pekerja.findOne({
            email,
            password
        })
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json('user not found')
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getAll,
    getByUserName,
    loginPekerja,
    registerPekerja
}
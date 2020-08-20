const Profile = require('../models/profile')
const Pengalaman = require('../models/pengalaman')
const {
    ObjectId
} = require('mongoose')

async function updateProfile(req, res, next) {
    try {
        let {
            username
        } = req.params

        const oldProfile = await Profile.findOne({
            username
        })

        console.log(oldProfile, 'old profile')

        if (oldProfile) {
            let {
                tempatLahir,
                tanggalLahir,
                domisili,
                namaLengkap,
            } = req.body
            const result = await Profile.updateOne({
                username,
                namaLengkap,
                tempatLahir,
                tanggalLahir,
                domisili,
            })
            if (result) {
                res.status(201).json(result)
            }
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getAll(req, res, next) {
    try {
        const result = await Profile.find()
        if (result) {
            res.status(201).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


async function getByUsername(req, res, next) {
    try {
        const {
            username
        } = req.params
        const result = await Profile.findOne({
            username
        }).populate('karya').populate('pengalaman').populate('pendidikan').exec()
        if (result) {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    updateProfile,
    getAll,
    getByUsername
}
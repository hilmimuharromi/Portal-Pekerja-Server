const Profile = require('../models/profile')
const {
    ObjectID,
    ObjectId
} = require('mongodb')

async function create(req, res, next) {
    try {
        let {
            pekerja,
            domisili
        } = req.body
        pekerja = ObjectId(pekerja)

        const result = await Profile.create({
            pekerja,
            domisili
        })
        if (result) {
            res.status(201).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getProfile(req, res, next) {
    try {
        let {
            pekerja
        } = req.params
        // pekerja = ObjectId(pekerja)
        console.log(pekerja);

        const result = await Profile.findOne({
            pekerja
        }).populate('pekerja').exec()
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)

        }
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    create,
    getProfile
}
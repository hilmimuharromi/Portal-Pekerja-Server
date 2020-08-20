const Pekerja = require('../models/pekerja')
const Profile = require('../models/profile')

async function registerPekerja(req, res, next) {
    try {
        const {
            username,
            email,
            password,
            namaLengkap
        } = req.body
        const readyPekerja = await Pekerja.findOne({
            username
        })

        if (readyPekerja) {
            res.status(400).json('username is ready')
        } else {

            const profileId = await Profile.create({
                username,
                namaLengkap
            })
            console.log(profileId, 'hasil profile');

            const data = new Pekerja({
                username,
                email,
                password,
                profile: profileId._id
            })
            const result = await data.save()
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
    loginPekerja,
    registerPekerja
}
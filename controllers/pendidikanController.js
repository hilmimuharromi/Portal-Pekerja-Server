const Profile = require('../models/profile')
const Pendidikan = require('../models/pendidikan')

async function addPendidikan(req, res, next) {
    let {
        username
    } = req.params
    let {
        namaInstansi,
        tahunMasuk,
        tahunLulus,
        jurusan,
        gelar
    } = req.body
    try {
        const newPendidikan = await Pendidikan.create({
            username,
            namaInstansi,
            tahunMasuk,
            tahunLulus,
            jurusan,
            gelar
        })
        if (newPendidikan) {
            const dataProfile = await Profile.findOne({
                username
            })
            dataProfile.pendidikan.push(newPendidikan._id)
            const result = await dataProfile.save()
            if (result) {
                res.status(201).json(result)
            }
            console.log(result, 'hasil add');
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    addPendidikan
}
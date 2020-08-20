const Profile = require('../models/profile')
const Pengalaman = require('../models/pengalaman')

async function addPengalaman(req, res, next) {
    let {
        username
    } = req.params
    let {
        posisi,
        namaPerusahaan,
        detail,
        tanggalMasuk,
        tanggalKeluar
    } = req.body
    try {
        const newPengalaman = await Pengalaman.create({
            username,
            posisi,
            namaPerusahaan,
            detail,
            tanggalMasuk,
            tanggalKeluar
        })
        if (newPengalaman) {
            const dataProfile = await Profile.findOne({
                username
            })
            dataProfile.pengalaman.push(newPengalaman._id)
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
    addPengalaman
}
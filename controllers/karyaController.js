const Karya = require('../models/karya')
const Profile = require('../models/profile')


async function addKarya(req, res, next) {
    try {
        let {
            username
        } = req.params
        let {
            judul,
            detail,
            imageUrl,
            tanggal,
            linkUrl
        } = req.body

        const newKarya = await Karya.create({
            username,
            judul,
            detail,
            imageUrl,
            tanggal,
            linkUrl
        })
        console.log(
            newKarya, 'new karya'
        );

        if (newKarya) {
            const dataProfile = await Profile.findOne({
                username
            })
            dataProfile.karya.push(newKarya._id)
            const result = await dataProfile.save()
            if (result) {
                res.status(201).json(result)
            }
        }

    } catch (error) {
        res.status(400).json(error)


    }
}

module.exports = {
    addKarya
}
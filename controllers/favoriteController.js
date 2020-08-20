const Favorite = require('../models/favorite')

async function getFavorite(req, res, next) {
    try {
        let {
            username
        } = req.params
        console.log(username)
        const result = await Favorite.find({
            username
        })
        if (result) {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

async function addfavorite(req, res, next) {
    try {
        let {} = req.body
    } catch (error) {

    }
}

module.exports = {
    getFavorite
}
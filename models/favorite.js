const mongoose = require('mongoose')
const {
    ObjectId
} = require('mongoose')
mongoose.set('useCreateIndex', true)

const favoriteSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    lowonganId: [{
        type: ObjectId,
        ref: 'Lowongan',
    }]
}, {
    collection: 'Favorite'
})

module.exports = mongoose.model('Favorite', favoriteSchema)
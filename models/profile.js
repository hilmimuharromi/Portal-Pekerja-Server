const mongoose = require('mongoose')
const {
    ObjectId
} = require('mongoose')
mongoose.set('useCreateIndex', true)

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    imageUrl: {
        type: String
    },
    namaLengkap: {
        type: String,
    },
    tempatlahir: {
        type: String,
    },
    tanggalLahir: {
        type: String,
    },
    status: {
        type: String
    },
    domisili: {
        type: String
    },
    pendidikan: [{
        type: ObjectId,
        ref: 'Pendidikan',
        unique: true
    }],
    pengalaman: [{
        type: ObjectId,
        ref: 'Pengalaman',
        unique: true
    }],
    karya: [{
        type: ObjectId,
        ref: 'Karya',
        unique: true
    }]
}, {
    collection: 'Profile'
})

module.exports = mongoose.model('Profile', profileSchema)
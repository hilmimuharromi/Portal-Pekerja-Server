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
        namaInstansi: String,
        tahunMasuk: String,
        tahunLulus: String,
        jurusan: String,
        gelar: String
    }],
    pengalaman: [{
        type: ObjectId,
        ref: 'Pengalaman',
        unique: true
    }],
    karya: [{
        judul: String,
        imageUrl: [String],
        videoUrl: String,
        detail: String,
        tanggal: String
    }]
}, {
    collection: 'Profile'
})

module.exports = mongoose.model('Profile', profileSchema)
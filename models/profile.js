const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const profileSchema = new mongoose.Schema({
    pekerja: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pekerja',
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
        posisi: String,
        namaPerusahaan: String,
        detail: String,
        tanggalMasuk: String,
        tanggalkeluar: String
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
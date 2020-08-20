const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const lowonganSchema = new mongoose.Schema({
    namaPerusahaan: {
        type: String,
    },
    judul: {
        type: String,
    },
    slug: {
        type: String
    },
    detail: {
        type: String
    },
    tanggalBerakhir: {
        type: String
    }
}, {
    collection: 'Lowongan'
})

module.exports = mongoose.model('Lowongan', lowonganSchema)
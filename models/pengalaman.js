const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const pengalamanSchema = new mongoose.Schema({
    username: String,
    posisi: String,
    namaPerusahaan: String,
    detail: String,
    tanggalMasuk: String,
    tanggalkeluar: String
}, {
    collection: 'Pengalaman'
})

module.exports = mongoose.model('Pengalaman', pengalamanSchema)
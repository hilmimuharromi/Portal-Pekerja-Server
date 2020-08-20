const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const pendidikanSchema = new mongoose.Schema({
    username: String,
    namaInstansi: String,
    tahunMasuk: String,
    tahunLulus: String,
    jurusan: String,
    gelar: String
}, {
    collection: 'Pendidikan'
})

module.exports = mongoose.model('Pendidikan', pendidikanSchema)
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const karyaSchema = new mongoose.Schema({
    username: String,
    judul: String,
    detail: String,
    imageUrl: String,
    tanggal: String
}, {
    collection: 'Karya'
})

module.exports = mongoose.model('Karya', karyaSchema)
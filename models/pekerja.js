const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const pekerjaSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username is ready']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email is ready'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    collection: 'Pekerja'
})

module.exports = mongoose.model('Pekerja', pekerjaSchema)
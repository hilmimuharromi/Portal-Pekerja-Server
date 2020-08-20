const express = require('express')
const app = express()
const router = require('./routes')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const dbName = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = `mongodb://127.0.0.1:27017/${dbName}`
app.use(express.urlencoded({extended: false}))
app.use(express.json())


mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('connected to databse')
    app.use(router)
})

module.exports = app
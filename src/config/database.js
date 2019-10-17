const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/mydb'
module.exports = mongoose.connect(mongoUrl, {
    useNewUrlParser: true
})
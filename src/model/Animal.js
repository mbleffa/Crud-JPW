const restful = require('node-restful')
const mongoose = restful.mongoose

const AnimalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    raça: { type: String, required: true },
    idade: { type: String, required: true },
})

module.exports = restful.model('Animal', AnimalSchema)
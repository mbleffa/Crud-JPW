const restful = require('node-restful')
const mongoose = restful.mongoose

const ContaBancariaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    banco: { type: String, required: true },
    cc: { type: String, required: true },
    agencia: { type: String, required: true },
})

module.exports = restful.model('ContaBancaria', ContaBancariaSchema)
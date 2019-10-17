const restful = require('node-restful')
const mongoose = restful.mongoose

const CartaoCreditoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    numero: { type: String, required: true },
    vencimento: { type: String, required: true },
    cvv: { type: String, required: true },
})

module.exports = restful.model('CartaoCredito', CartaoCreditoSchema)
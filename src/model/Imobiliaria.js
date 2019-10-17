const restful = require('node-restful')
const mongoose = restful.mongoose

const ImobiliariaSchema = new mongoose.Schema({
    código: { type: String, required: true },
    tipo: { type: String, required: true },
    local: { type: String, required: true },
})

module.exports = restful.model('Imobiliaria', ImobiliariaSchema)
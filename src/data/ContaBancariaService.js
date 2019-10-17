const schema = require('../model/ContaBancaria')

schema.methods(['get', 'post', 'put', 'delete'])

module.exports = schema
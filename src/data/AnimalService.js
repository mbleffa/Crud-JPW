const schema = require('../model/Animal')

schema.methods(['get', 'post', 'put', 'delete'])

module.exports = schema
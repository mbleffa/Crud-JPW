const schema = require('../model/User')
const errorHandler = require('../util/errorHandle')

schema.methods(['get', 'post', 'put', 'delete'])

module.exports = schema
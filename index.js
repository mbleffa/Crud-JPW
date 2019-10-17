const server = require('./src/app')
require('./src/config/database')
require('./src/routes/routes')(server)
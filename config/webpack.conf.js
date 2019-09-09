const configFactory = require('./webpack.config')

const config = configFactory('development')
console.log('================================', config)

module.exports = config

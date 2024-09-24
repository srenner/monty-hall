'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const GameService = require('./routes/game/service')

const fp = require('fastify-plugin')

// Pass --options via CLI arguments in command to enable these options.
const options = {}



module.exports = async function (fastify, opts) {
  // Place here your custom code!

  //const fp = require('fastify-plugin')


  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })


  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

}





module.exports.options = options

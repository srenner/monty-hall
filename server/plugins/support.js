'use strict'

// const fp = require('fastify-plugin')

// // the use of fastify-plugin is required to be able
// // to export the decorators to the outer scope

// module.exports = fp(async function (fastify, opts) {
//   fastify.decorate('someSupport', function () {
//     return 'hugs'
//   })
// })

async function plugin (fastify, opts) {
    return { hello: 'world' }
  }

export default plugin
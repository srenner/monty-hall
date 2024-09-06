'use strict'

module.exports = async function (fastify, opts) {
  
  fastify.get('/ip', async function(request, reply) {
    return request.ip;
  });

}

'use strict'

export default async function (fastify, opts) {
  
  fastify.get('/ip', async function(request, reply) {
    return request.ip;
  });

}

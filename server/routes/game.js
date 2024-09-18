'use strict'

module.exports = async function (fastify, opts) {
  
  fastify.decorate('uuid', function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
       var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
       return uuid.toString(16);
    });
  })
  

  fastify.get('/uuid', async function(request, reply) {
    return fastify.uuid();
  })

  fastify.post('/game/interactive', async function(request, reply) {
    return '';
  });

  


}

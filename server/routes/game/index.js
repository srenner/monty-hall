'use strict'

module.exports = async function (fastify, opts) {

    // DECORATOR FUNCTIONS ////////////////////////////////////////////////////

    fastify.decorate('uuid', function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
        function(c) {
            var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
            return uuid.toString(16);
        });
    })

    fastify.decorate('randomDoor', () => Math.floor(Math.random() * 3));
  
    // END DECORATOR FUNCTIONS ////////////////////////////////////////////////

    // API ENDPOINTS //////////////////////////////////////////////////////////

    fastify.get('/random', async function(request, reply) {
        return fastify.randomDoor();
    });

    fastify.get('/uuid', async function(request, reply) {
        return fastify.uuid();
    });

    fastify.post('/automated', async function(request, reply) {
        return '';
    });

    fastify.post('/interactive', async function(request, reply) {
        return '';
    });

    // END API ENDPOINTS //////////////////////////////////////////////////////
}

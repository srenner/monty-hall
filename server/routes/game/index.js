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
        let initialDoor = request.query.door || fastify.randomDoor();
        let winningDoor = fastify.randomDoor();

        if(initialDoor === winningDoor) {
            // host door can be either unchosen door
        }
        else {
            // host door must be the only remaining loser door
        }

        let game = {
            id: null,             
            webid: fastify.uuid(),
            initial_door: initialDoor,
            winning_door: winningDoor,
            host_door: null,
            human_player: 1,
            switch_door: null,
            date_start: new Date(),
            date_end: null
        }

        /** gamePartial is a subset of the game to keep some details secret */
        let gamePartial = {
            webid: game.webid,
            initial_door: game.initial_door,
            host_door: game.host_door
        }


        return gamePartial;
    });

    // END API ENDPOINTS //////////////////////////////////////////////////////
}

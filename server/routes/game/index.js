'use strict'
    
import schemas from './schemas.js'
import GameService from "./service.js";
const gameService = new GameService();

export default async function (fastify, opts) {

    fastify.get('/random', async function(request, reply) {
        return gameService.getRandomDoor();
    });

    fastify.get('/uuid', async function(request, reply) {
        return gameService.getNewWebid();
    });

    fastify.post('/automated', async function(request, reply) {
        return '';
    });



    fastify.route({
        method: 'POST',
        url: '/interactive',
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    door: { type: 'integer' }
                }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        webid: { type: 'string' },
                        initial_door: { type: 'integer' },
                        host_door: { type: 'integer' }
                    }
                }
            }
        },
        handler: async function (request, reply) {

            let webid = await gameService.getNewWebid();
            let initialDoor = request.query.door || await gameService.getRandomDoor();
            let winningDoor = gameService.getRandomDoor();

            reply.send({ 
                webid: webid,
                initial_door: initialDoor,
                host_door: -1
            })
        }
    })

}

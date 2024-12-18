'use strict'
    
import schemas from './schemas.js'
import GameService from "./service.js";
const gameService = new GameService();
import { DataRepository } from '../../data/DataRepository.js';

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
            let winningDoor = await gameService.getRandomDoor();
            let hostDoor = -1; // todo
            let dateStart = new Date();
            let ip = request.ip;

            let repo = new DataRepository(db_callback);
            await repo.insertInteractiveGame(webid, initialDoor, winningDoor, hostDoor, dateStart, ip, function(err) {
                fastify.log.info('lastID: ' + this.lastID);
                repo.close();
                reply.send({ 
                    webid: webid,
                    initial_door: initialDoor,
                    host_door: hostDoor,
                })
            });
            return reply;
        }
    })

    fastify.route({
        method: 'POST',
        url: '/interactive/finish',
        schema: {
            body: {
                type: 'object',
                properties: {
                    webid: { type: 'string' },
                    switch_door: { type: 'boolean' }
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
            return false;
        }
    })

    function db_callback(err) {
        if(err) {
            fastify.log.error(err);
        }
    }

}

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

    fastify.post('/interactive', async function(request, reply) {
        let webid = gameService.getNewWebid();
        let initialDoor = request.query.door || gameService.getRandomDoor();
        let winningDoor = gameService.getRandomDoor();

        if(initialDoor === winningDoor) {
            // host door can be either unchosen door
        }
        else {
            // host door must be the only remaining loser door
        }

        // let gameObj = {
        //     id: null,             
        //     webid: fastify.uuid(),
        //     initial_door: initialDoor,
        //     winning_door: winningDoor,
        //     host_door: null,
        //     human_player: 1,
        //     switch_door: null,
        //     date_start: new Date(),
        //     date_end: null
        // }

        return '-1';
    });

}

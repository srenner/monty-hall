'use strict'

// const {
//     game: gameSchema,
//     gamePartialView: gamePartialSchema
//     } =  
    
//import {gameSchema, gamePartialSchema} from './schemas.js'

import GameService from "./service.js";

export default async function (fastify, opts) {

    fastify.decorate('randomDoor', () => Math.floor(Math.random() * 3));

    fastify.get('/random', async function(request, reply) {
        return fastify.randomDoor();
    });

    fastify.get('/uuid', async function(request, reply) {
        return fastify.gameService.getNewWebid();
        
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

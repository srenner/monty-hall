'use strict'
import autoLoad from '@fastify/autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fastify from 'fastify';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import GameService from './routes/game/service.js';
import fp from 'fastify-plugin';

// Pass --options via CLI arguments in command to enable these options.
const options = {}

let app = async function (fastify, opts) {

  fastify.register(autoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(autoLoad, {
    dir: join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

}

export default app;

'use strict'

import fp from 'fastify-plugin';
import sensible from '@fastify/sensible'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */

async function plugin (fastify, opts) {
  
  fastify.register(sensible, {
    errorHandler: false
  })
}

export default plugin
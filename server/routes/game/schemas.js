'use strict'

const game = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://montyhall.dev/game.schema.json",
    "title": "Game",
    "description": "Instance of a Monty Hall game",
    "type": "object",
    "properties": {
        "id": {
            "description": "PK (Autoincrement in db)",
            "type": "integer"
        },
        "webid": {
            "description": "Player-facing unique identifier",
            "type": "string"
        },
        "initialDoor": {
            "description": "Initial door the player chose",
            "type": "integer",
            "minimum": 0,
            "maximum": 2
        },
        "winningDoor": {
            "description": "The door with the prize",
            "type": "integer",
            "minimum": 0,
            "maximum": 2
        },
        "hostDoor": {
            "description": "The door the host shows to the user",
            "type": "integer",
            "minimum": 0,
            "maximum": 2
        },
        "humanPlayer": {
            "description": "true for interactive game, false for automated",
            "type": "boolean"
        },
        "switchDoor": {
            "description": "true if the user decided to switch doors",
            "type": "boolean"
        },
        "dateStart": {
            "description": "Timestamp when game was initialized",
            "type": "string"
        },
        "dateEnd": {
            "description": "Timestamp for when all game activities are over",
            "type": "string"
        },
        "ip": {
            "description": "ip of user that initiated the game",
            "type": "string"
        }
    },
    "$comment": "TODO: set required fields"
}

const gamePartialView = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://montyhall.dev/gamePartialView.schema.json",
    "title": "Game (Partial)",
    "description": "Partial details of a Monty Hall game",
    "type": "object",
    "properties": {
        "webid": {
            "description": "Player-facing unique identifier",
            "type": "string"
        },
        "initialDoor": {
            "description": "Initial door the player chose",
            "type": "integer",
            "minimum": 0,
            "maximum": 2
        },
        "hostDoor": {
            "description": "The door the host shows to the user",
            "type": "integer",
            "minimum": 0,
            "maximum": 2
        },
    },
    "required": ["webid", "initialDoor", "hostDoor"]
}

export * from 'schemas'
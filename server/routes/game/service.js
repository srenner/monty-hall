'use strict'

export default class GameService {
    constructor () {
        //this.dbConn = dbConn
    } 

    async getGame (webid) {
        console.log('fetch ' + webid);
    }


    async getRandomDoor() {
        return Math.floor(Math.random() * 3);
    }

    async getNewWebid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function(c) {
                var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
                return uuid.toString(16);
            });
    }
}
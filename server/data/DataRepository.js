import sqlite3 from 'sqlite3'
sqlite3.verbose();

export class DataRepository {
    constructor(error_callback) {
        
        this.db = new sqlite3.Database('./data/montyhall.sqlite3', error_callback);
        
    }

    async insertInteractiveGame(webid, initial_door, winning_door, host_door, date_start, ip) {
        this.db.run("INSERT INTO game_history (webid, initial_door, winning_door, host_door, human_player, date_start, ip) " + 
            "VALUES ($webid, $initial_door, $winning_door, $host_door, $human_player, $date_start, $ip);", {
                $webid: webid,
                $initial_door: initial_door,
                $winning_door: winning_door,
                $host_door: host_door,
                $human_player: 1,
                $date_start: date_start,
                $ip: ip
            }
        );
    }

    async insertAutomatedGame() {

    }
    
    async selectGameByWebID(webID) {

    }

    async selectGameByID(id) {

    }

    async close() {
        if(this.db) {
            this.db.close();
        }
    }
}

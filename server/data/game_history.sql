CREATE TABLE "game_history" (
	"id"	INTEGER NOT NULL UNIQUE,
	"webid"	TEXT NOT NULL UNIQUE,
	"initial_door"	INTEGER NOT NULL,
	"winning_door"	INTEGER NOT NULL,
	"host_door"	INTEGER NOT NULL,
	"human_player"	NUMERIC DEFAULT 0,
	"switch_door"	INTEGER,
	"date_start"	TIMESTAMP NOT NULL,
	"date_end"	TIMESTAMP,
	"ip"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
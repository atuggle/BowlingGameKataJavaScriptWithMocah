"use strict";

class Game {
    constructor() {
        this.score = 0;
    }

    bowl(pins) {
        this.score += pins;
    }

    scoreGame() {
        return this.score;
    }
};

exports.Game = Game;
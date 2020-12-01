"use strict";

class Game {
    constructor() {
        this.score = 0;
        this.rolls = new Array();
    }

    bowl(pins) {
        this.rolls.push(pins);
    }

    scoreGame() {
        this.score = 0;
        let turn = 0
        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[turn] + this.rolls[turn + 1] == 10) {
                this.score += 10 + this.rolls[turn + 2];
            } else {
                this.score += this.rolls[turn] + this.rolls[turn + 1];
            }
            turn += 2;
        }
        return this.score;
    }
};

exports.Game = Game;
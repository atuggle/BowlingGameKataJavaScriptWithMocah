"use strict";

class Game {
    constructor() {
        this.rolls = new Array();
    }

    bowl(pins) {
        this.rolls.push(pins);
    }

    scoreGame() {
        let score = 0;
        let turn = 0
        for (let frame = 0; frame < 10; frame++) {
            if (this.rolls[turn] == 10) {
                score += 10 + this.rolls[turn + 2] + this.rolls[turn + 2];
                turn += 1;
            } else if (this.rolls[turn] + this.rolls[turn + 1] == 10) {
                score += 10 + this.rolls[turn + 2];
                turn += 2;
            } else {
                score += this.rolls[turn] + this.rolls[turn + 1];
                turn += 2;
            }
        }
        return score;
    }
};

exports.Game = Game;
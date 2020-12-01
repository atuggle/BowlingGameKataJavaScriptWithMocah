const assert = require('assert');
const { Game } = require("./game.js");

describe('Tests', () => {
    it('CanCreateGameObject', () => {
        let myGame = new Game();
        assert(myGame);
    })
});
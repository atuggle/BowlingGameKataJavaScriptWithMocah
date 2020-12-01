const assert = require('assert');
const { Game } = require("./game.js");

describe('Tests', () => {
    it('CanCreateGameObject', () => {
        let myGame = new Game();
        assert(myGame, 'Game object was not successfully created');
    }),    
    it('Can Bowl gutter game (all zeros)', () => {
        let myGame = new Game();
        for (roll = 0; roll < 10; roll++) {
            myGame.bowl(0);
        }
        
        assert(0 === myGame.scoreGame(), 'Invalid score calculated');
    })
});
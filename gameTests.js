const assert = require('assert');
const { Game } = require("./game.js");

function bowlMany(myGame, pins, rolls) {
    for (roll = 0; roll < rolls; roll++) {
        myGame.bowl(pins);
    }
}

describe('Tests', () => {
    let myGame = new Game();
    beforeEach(() => {
        myGame = new Game();
    });
    it('CanCreateGameObject', () => {
        assert(myGame, 'Game object was not successfully created');
    }),    
    it('Can Bowl gutter game (all zeros)', () => {
        bowlMany(myGame, 0, 10);

        assert(0 === myGame.scoreGame(), 'Invalid score calculated');
    }),
    it('Can Bowl all ones (score of 20)', () => {
        bowlMany(myGame, 1, 20);
        
        assert(20 === myGame.scoreGame(), 'Invalid score calculated, should be 20!');
    }),
    it('Can bowl spare', () => {
        bowlMany(myGame, 1, 20);
        
        console.log(myGame.scoreGame());
        assert(20 === myGame.scoreGame(), 'Invalid score calculated, should be 20!');
    })
});
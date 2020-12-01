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
        bowlMany(myGame, 0, 20);
        assert(0 === myGame.scoreGame(), 'Invalid score calculated');
    }),
    it('Can Bowl all ones (score of 20)', () => {
        bowlMany(myGame, 1, 20);
        assert(20 === myGame.scoreGame(), 'Invalid score calculated, should be 20!');
    }),
    it('Can bowl spare', () => {
        myGame.bowl(5);
        myGame.bowl(5);
        myGame.bowl(3);
        bowlMany(myGame, 0, 17);

        assert(16 === myGame.scoreGame(), 'Invalid score calculated, should be 16!');
    }),
    it('Can bowl strike', () => {
        myGame.bowl(5);
        myGame.bowl(2);
        myGame.bowl(10);
        myGame.bowl(3);
        myGame.bowl(3);
        bowlMany(myGame, 0, 15);
        
        assert(29 === myGame.scoreGame(), 'Invalid score calculated, should be 29!');
    }),
    it('Can bowl perfect game', () => {
        bowlMany(myGame, 10, 12);
        assert(300 === myGame.scoreGame(), 'Invalid score calculated, should be 300!');
    })
});
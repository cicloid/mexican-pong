import 'babel-polyfill';
import Game from './game.js';
import Entity from './entity';
import Background from './background';
import Ball from './ball';
import {PlayerOne, PlayerTwo} from './rackets';

let canvas = document.querySelector("canvas"),
  game = new Game(canvas);


game.entities = [
  new Background(game),
  game.ball = new Ball(game),
    game.playerOne = new PlayerOne(game),
    game.playerTwo = new PlayerTwo(game)
];

window.game = game
game.start();
canvas.focus();

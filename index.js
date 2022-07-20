import World from "./src/World.js";
import View from "./src/View.js";
import Game from "./src/Game.js";
import levels from "./data/levels.js"
import Sprite from "./src/Sprite.js"; 

const canvas = document.querySelector('canvas');
const sprite = new Sprite('./assets/sprite.png');

const game = new Game({
    world: new World(),
    view: new View(canvas, sprite),
    levels
});


game.init().then(() => {
    game.start();
})

console.log(game); 
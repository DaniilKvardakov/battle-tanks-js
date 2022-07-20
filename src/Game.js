export default class Game {
    constructor({ world, view, levels }) {
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.loop = this.loop.bind(this);
    }
    async init() {
        this.view.init();
    }
    start() {
        requestAnimationFrame(this.loop);
    }
    loop() {
        // get input 
        // update world 
        this.world.update();
        // update view 
        this.view.update(this.world);
        requestAnimationFrame(this.loop);
    }
}
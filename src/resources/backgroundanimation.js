import boid from './boid';

const p5Wrapper = function( sketch ) {
    let canvasWidth = window.innerWidth;
    let boids = [];

    sketch.setup = function() {
        sketch.createCanvas(canvasWidth, 800);
        for(var i = 0; i < 200; i++) { 
            boids.push(new boid(new p5.Vector(Math.floor(Math.random() * canvasWidth-1), Math.floor(Math.random() * 799)), sketch, canvasWidth, 800));
        }
    };

    sketch.draw = function() {
        sketch.clear();
        sketch.fill(255, 255, 255, 50);
        sketch.noStroke(0);
        boids.forEach(boid => {
            boid.update();
            boid.draw();
        });
    };
    
    sketch.windowResized = function() {
        canvasWidth = window.innerWidth;
        sketch.resizeCanvas(canvasWidth, 500);
        boids.forEach(boid => {
            boid.updateEdges(canvasWidth, 500);
        });
    };
};
  
export default new p5(p5Wrapper, 'animated-background-canvas');

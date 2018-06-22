import boid from './boid';

export const p5Wrapper = function( sketch ) {
    let canvasWidth = window.innerWidth;
    let boids = [];

    sketch.setup = function() {
        if(window.innerWidth < 736) {
            sketch.createCanvas(canvasWidth, 400);
        } else {
            sketch.createCanvas(canvasWidth, 775);
        }
        for(var i = 0; i < 100; i++) { 
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
        if(window.innerWidth <= 736) {
            sketch.resizeCanvas(canvasWidth, 400);
            boids.forEach(boid => {
                boid.updateEdges(canvasWidth, 400);
            });
        } else {
            sketch.resizeCanvas(canvasWidth, 775);
            boids.forEach(boid => {
                boid.updateEdges(canvasWidth, 775);
            });
        }
    };
};
  
export default new p5(p5Wrapper, 'animated-background-canvas');

function setup() {
    createCanvas(800,600);
}

let xPos = 0;
let yPos = 300;

function draw() {
    circle(xPos,yPos,50)
    fill(242,31,35)
    xPos = xPos + 5;
    if (xPos > 800) {
        xPos = 0;
    }


}
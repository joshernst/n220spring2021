function setup() {
    createCanvas(800,600);
}
let xPos = 0;
let yPos = 0;
let xSpeed = 5;
let ySpeed = 5;
function draw() {
    background(28,28,28)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    circle(xPos,yPos,40);
    fill(31, 242, 67)
    if (xPos>=800) {
        xSpeed *= -1 ;
    }
    if (yPos>=600) {
        ySpeed *= -1;
    }
    if (xPos<=0) {
        xSpeed *= -1 ;
    }
    if (yPos<=0) {
        ySpeed *= -1;
    }
}
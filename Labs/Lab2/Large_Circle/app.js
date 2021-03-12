function setup() {
    createCanvas(800,600);
}

let diameter = 1

function draw() {
    diameter ++;
    circle(400,300,diameter);
    if (diameter>= 200) {
        diameter = 1
    }
}
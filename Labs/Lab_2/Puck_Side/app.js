function setup() {
    createCanvas(400,300);
}

function draw() {
    background(242, 211, 231);
    circle(mouseX,mouseY,60);
    if (mouseX <= 200) {
        fill(22, 102, 199);
    } else {
        fill(209,23,26);
    }

        
}
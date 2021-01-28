let yPos = 30;

function setup() {
    createCanvas(800, 400)
}




function draw() {
//creating background 
    background(18, 160, 255);
    if(yPos > 200 ) {
        background(0,11,18);
    }
    fill(250, 250, 250)
    rect(0,350,800,60)
//creating house
    fill(102, 83, 68);
    rect(40, 200, 300, 150);
    fill(181, 156, 63);
    triangle(40,200, 187,70, 340,200);

//door
    fill(173, 52, 52);  
    rect(166, 250, 55, 100);
    fill(181, 156, 63);
    circle(214, 300, 8);

 //windows
    fill(173, 151, 52)
    rect(60, 250, 85, 50);
    rect(240,250,85,50)

    fill(102, 83, 68);
    rect(60,270,85,10);
    rect(97,250,10,50);
    rect(240,270,85,10);
    rect(277,250,10,50);

// Sun and Moon 

    if(yPos > 200) {
        fill(250,250,250);
    } else {
        fill(250,240,0)
    }

    if(yPos>=320) {
        yPos = 30
    }

    circle(650, yPos ++, 60);
    




}

var a = 0;

function setup() {
    createCanvas(800, 800);
    background(220)
    angleMode(DEGREES);
}


function draw () {
    //put the background in draw if you don't want the stroke
    
    push();
    //translate to where you want the centre of the elipse to be
    translate(width/2, height /2);
    rotate(a);
    //draw the elipse at the origin
    ellipse(0, 0, 300, 150);
    a = a+0.5;

    pop()
}
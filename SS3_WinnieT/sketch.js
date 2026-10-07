/*

Name: Winnie Tsao
Title: meteor on a road to the mountains at night

I used keyPressed and random() to make a meteor start at a random position used conditional statements 
to make the meteor move at different speeds depending on where it is on the canvas, and several 
different variables were also used to make this happen

*/

//declare variables for the meteor
let meteorX;
let meteorY;

//declare variables for the color of the meteor
let r = 255;
let g = 255;
let b = 255;

//declare variables for the speed of the meteor
let speedX;
let speedY;

//set up function to run code
function setup() 
{
    // setting size of canvas
    createCanvas(1000, 600); 

    // starting position of the meteor
    meteorX = random(0, 1000);
    meteorY = random(0, 400);

    //starting speed of the meteor
    speedX = 3;
    speedY = 2;
}

function draw()
{
    // fill color for the sky
    fill(24, 41, 88);

    // draw rectangle as sky
    rect(0, 0, 1000, 400);

    // fill color for the ground
    fill(85, 107, 47);

    // draw rectangle as the ground
    rect(0, 400, 1000, 200);

    // fill color for the road
    fill(43, 45, 47);

    // draw quadrilateral as the road
    quad(400, 400, 600, 400, 700, 600, 300, 600);

    // fill color for the road lines
    fill(255, 255, 255);

    // draw quadrilaterals as the road lines
    quad(495, 400, 505, 400, 505, 430, 495, 430);
    quad(495, 450, 505, 450, 505, 520, 495, 520);
    quad(495, 550, 505, 550, 505, 600, 495, 600);

    // fill color for the mountains
    fill(0, 100, 0);

    // draw triangle as the mountains
    triangle(100, 400, 300, 100, 500, 400);
    triangle(500, 400, 700, 200, 900, 400);

    // fill color for the snow on the mountains
    fill(255, 250, 250);

    // draw triangle as the snow on the mountains
    triangle(300, 100, 233, 200, 400, 250);
    triangle(700, 200, 600, 300, 900, 400);

    // fill color for the moon
    fill(238, 233, 233);

    // draw ellipse as the moon
    ellipse(100, 100, 100, 100);

    // METEOR

    // conditions for the meteor to move across the screen
    if (meteorY < 200)
    {
        // moves teh meteor normally across the canvas
        meteorX += speedX;
        meteorY += speedY;
    }
    else if (meteorY < 400)
    {
        // moves the meteor faster across the canvas
        meteorX += speedX * 2;
        meteorY += speedY * 2;
    }
    else
    {
        // meteor stops moving when it reaches the ground
        meteorX += 0;
        meteorY += 0;
    }

    // draw the meteor tail
    stroke(255, 255, 255);
    strokeWeight(2);
    line(meteorX, meteorY, meteorX - 60, meteorY - 30);

    // draw the meteor
    noStroke();
    fill(r, g, b);
    ellipse(meteorX, meteorY, 5, 5);

    // stroke for the outline of all the other objects
    stroke(0);
    strokeWeight(1);
}

function keyPressed() 
{
    if (keyCode == 32) 
    {
        // the meteor starts at a random position
        meteorX = random(0, 1000);
        meteorY = random(0, 400);

        // the meteor moves at a random speed
        speedX = random(2, 6);
        speedY = random(1, 4);
    }
}

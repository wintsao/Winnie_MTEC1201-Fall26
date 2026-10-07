/*

Name: Winnie Tsao
Title: meteor on a road to the mountains at night

I used mousePressed to make a meteor start at the mouse position, several different variables were also
used to make this happen. 

*/

//declare variables for the meteor that will start at the mouse position
let meteorX = 500;
let meteorY = 100;

//declare variables for the color of the meteor
let r = 255;
let g = 255;
let b = 255;

//declare variables for the speed of the meteor
let speedX = 0;
let speedY = 0;

//set up function to run code
function setup() 
{
    //setting size of canvas
    createCanvas(1000, 600); 
}

function draw()
{
    //fill color for the sky
    fill(24, 41, 88);

    //draw rectangle as sky
    rect(0, 0, 1000, 400);

    //fill color for the ground
    fill(85, 107, 47);

    //draw ractangle as the ground
    rect(0, 400, 1000, 200);

    //fill color for the road
    fill(43, 45, 47);

    //draw quadrilateral as the road
    quad(400, 400, 600, 400, 700, 600, 300, 600);

    //fill color for the road lines
    fill(255, 255, 255);

    //draw quadrilaterals as the road lines
    quad(495, 400, 505, 400, 505, 430, 495, 430);
    quad(495, 450, 505, 450, 505, 520, 495, 520);
    quad(495, 550, 505, 550, 505, 600, 495, 600);

    //fill color for the mountains
    fill(0, 100, 0);

    //draw triangle as the mountains
    triangle(100, 400, 300, 100, 500, 400);
    triangle(500, 400, 700, 200, 900, 400);

    //fill color for the snow on the mountains
    fill(255, 250, 250);

    //draw triangle as the snow on the mountains
    triangle(300, 100, 233, 200, 400, 250);
    triangle(700, 200, 600, 300, 900, 400);

    //fill color for the moon
    fill(238, 233, 233);

    //draw ellipse as the moon
    ellipse(100, 100, 100, 100);

    //make the ellipse that that follows the mouse position transparent
    fill(255, 255, 255, 100);

	//ellipse following the mouse position as the pointer for the meteor
	ellipse(mouseX, mouseY, 10, 10);

    //METEOR

    //move the meteor across the canvas
    meteorX += speedX;
    meteorY += speedY;

    //draw the meteor tail
    stroke(255, 255, 255);
    strokeWeight(2);
    line(meteorX, meteorY, meteorX - 60, meteorY - 30);

    //draw the meteor
    noStroke();
    fill(r, g, b);
    ellipse(meteorX, meteorY, 5, 5);

    //stroke for the outline of all the other objects
    stroke(0);
    strokeWeight(1);
}

function mousePressed() 
{
	//start the meteor at the mouse position
    meteorX = mouseX;
    meteorY = mouseY;

    //give the meteor movement
    speedX = 5;
    speedY = 2;
}

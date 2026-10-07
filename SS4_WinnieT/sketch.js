/*

Winnie Tsao

Meteor night with a real moon

I used a picture of the moon with a transparent background as a 
replacement for the moon in my sketch. 
I also added more meteors that fall from the sky in different
speeds and positions, and added some text that are timecoded
to the sketch anticipating that something will happen in the sky.

*/

// declare variables for the moon image
let moon;

//declare variables for the meteors
let meteorX1;
let meteorY1;
let meteorX2;
let meteorY2;
let meteorX3;
let meteorY3;

//declare variables for the color of the meteor
let r = 255;
let g = 255;
let b = 255;

// declare time variable
let currentTime;

//set up function to with asyncronous loading of images
async function setup() 
{
    // setting size of canvas
    createCanvas(1000, 600); 

    // load the moon image
    moon = await loadImage('moon.png');

    // declare text position
    textAlign(CENTER);

    // starting position of the meteor
    meteorX1 = random(0, 1000);
    meteorY1 = random(0, 300);
    meteorX2 = random(0, 1000);
    meteorY2 = random(0, 300);
    meteorX3 = random(0, 1000);
    meteorY3 = random(0, 300);
}

function draw()
{
    // sky
    fill(24, 41, 88);
    rect(0, 0, 1000, 400);

    // ground
    fill(85, 107, 47);
    rect(0, 400, 1000, 200);

    // road
    fill(43, 45, 47);
    quad(400, 400, 600, 400, 700, 600, 300, 600);

    // road lines
    fill(255, 255, 255);
    quad(495, 400, 505, 400, 505, 430, 495, 430);
    quad(495, 450, 505, 450, 505, 520, 495, 520);
    quad(495, 550, 505, 550, 505, 600, 495, 600);

    // mountains
    fill(0, 100, 0);
    triangle(100, 400, 300, 100, 500, 400);
    triangle(500, 400, 700, 200, 900, 400);

    // snow on the mountains
    fill(255, 250, 250);
    triangle(300, 100, 233, 200, 400, 250);
    triangle(700, 200, 600, 300, 900, 400);

    // moon
    image(moon, 50, 50, 150, 100);

    // METEOR

    // get the current time in milliseconds
    currentTime = millis();

    // time condition for the meteor to start
    if (currentTime > 4500)
    {
        // movement of the meteor1
        meteorX1 += 3;
        meteorY1 += 2;

        // if meteor1 goes off the screen, reset
        if (meteorY1 > 400)
        {
            meteorX1 = random(0, 1000);
            meteorY1 = random(0, 300);
        }

        // movement of the meteor2
        meteorX2 += 4;
        meteorY2 += 2;

        // if meteor2 goes off the screen, reset
        if (meteorY2 > 400)
        {
            meteorX2 = random(0, 1000);
            meteorY2 = random(0, 300);
        }

        // movement of the meteor3
        meteorX3 += 3;
        meteorY3 += 3;

        // if meteor3 goes off the screen, reset
        if (meteorY3 > 400)
        {
            meteorX3 = random(0, 1000);
            meteorY3 = random(0, 300);
        }

        // draw the meteor tail for first meteor
        stroke(255, 255, 255);
        strokeWeight(2);
        line(meteorX1, meteorY1, meteorX1 - 60, meteorY1 - 30);

        // draw the first meteor
        noStroke();
        fill(r, g, b);
        ellipse(meteorX1, meteorY1, 5, 5);
        
        // meteor and meteor tail for second meteor
        stroke(255, 255, 255);
        strokeWeight(2);
        line(meteorX2, meteorY2, meteorX2 - 60, meteorY2 - 30);

        noStroke();
        fill(r, g, b);
        ellipse(meteorX2, meteorY2, 5, 5);

        // meteor and meteor tail for third meteor
        stroke(255, 255, 255);
        strokeWeight(2);
        line(meteorX3, meteorY3, meteorX3 - 60, meteorY3 - 30);

        noStroke();
        fill(r, g, b);
        ellipse(meteorX3, meteorY3, 5, 5);
    }

    // stroke for the outline of all the other objects
    stroke(0);
    strokeWeight(1);

    // TEXT
    //first text
    if (currentTime < 1000)
{
    fill(255);
    textSize(32);
    text("A Quite Night", 500, 80);
}
// second message
else if (currentTime < 3000)
{
    fill(255);
    textSize(32);
    text("Something is coming...", 500, 80);
}
//third message
else
{
    fill(255);
    textSize(38);
    text("LOOK UP THE SKY!", 500, 80);
}
}

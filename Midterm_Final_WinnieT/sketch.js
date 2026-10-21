
/*
Name: Winnie Tsao
Title: Meteor Dodge
Instructions:
Press ENTER to open instructions.
Press ENTER again to start the game.
Use UP, DOWN, LEFT, and RIGHT arrow keys to move.
Avoid the meteors and survive as long as possible.
Each meteor dodged earns one point.
Press ENTER after game over to restart the game.

*/

// GAME STATES
// 0 = title screen
// 1 = instructions
// 2 = playing
// 3 = game over
let gameState = 0;

// SPACESHIP
let shipX = 500;
let shipY = 500;
let shipSpeed = 5;

// METEOR POSITIONS
let meteorX1, meteorY1;
let meteorX2, meteorY2;
let meteorX3, meteorY3;
let meteorX4, meteorY4;
let meteorX5, meteorY5;
let meteorX6, meteorY6;
let meteorX7, meteorY7;
let meteorX8, meteorY8;

// METEOR SIZES
let meteorSize1 = 22;
let meteorSize2 = 35;
let meteorSize3 = 28;
let meteorSize4 = 40;
let meteorSize5 = 20;
let meteorSize6 = 32;
let meteorSize7 = 26;
let meteorSize8 = 38;

// METEOR SPEEDS
let meteorSpeed1 = 3;
let meteorSpeed2 = 4;
let meteorSpeed3 = 5;
let meteorSpeed4 = 2;
let meteorSpeed5 = 3.5;
let meteorSpeed6 = 4.5;
let meteorSpeed7 = 3.8;
let meteorSpeed8 = 4.2;

// DIFFICULTY
let difficulty = 0;

// SCORE AND TIME
let score = 0;
let startTime = 0;
let survivalTime = 0;
let timeText = "0:00";

// MENU SHAPES
let shapeY1 = 0;
let shapeY2 = 150;
let shapeY3 = 300;
let shapeY4 = 100;
let shapeY5 = 450;
let shapeY6 = 350;
let shapeY7 = 200;
let shapeY8 = 500;

// FONT
let font;

async function setup()
{
    createCanvas(1000, 600);

    // LOAD FONT
    font = await loadFont('GEAR8.otf')

    textFont(font);
    resetGame();
}

function draw()
{
    if (gameState === 0)
    {
        Menu();
    }
    else if (gameState === 1)
    {
        Instructions();
    }
    else if (gameState === 2)
    {
        Game();
    }
    else if (gameState === 3)
    {
        GameOver();
    }
}

// MOVING GEOMETRIC BACKGROUND
function GeometricBackground()
{
    noFill();
    stroke(70, 190, 255);
    strokeWeight(2);

    // Moving square 1
    rect(150, shapeY1, 35, 35);

    // Moving square 2
    rect(500, shapeY2 + 100, 50, 50);

    // Moving circle 1
    ellipse(800, shapeY3, 40, 40);

    // Moving circle 2
    ellipse(200, shapeY4 + 150, 60, 60);

    // Moving triangle 1
    triangle(350, shapeY5, 330, shapeY5 + 35, 370, shapeY5 + 35);

    // Moving triangle 2
    triangle(700, shapeY6, 680, shapeY6 + 35, 720, shapeY6 + 35);

    // Moving diamond 1
    quad(650, shapeY7, 670, shapeY7 + 20, 650, shapeY7 + 40, 630, shapeY7 + 20);
    
    // Moving diamond 2
    quad(400, shapeY8, 420, shapeY8 + 20, 400, shapeY8 + 40, 380, shapeY8 + 20);

    // Move shapes downward continuously
    shapeY1 += 1.5;
    shapeY2 += 2;
    shapeY3 += 1.8;
    shapeY4 += 2.5;
    shapeY5 += 1.2;
    shapeY6 += 2.8;
    shapeY7 += 2;
    shapeY8 += 1.5;

    // Reset each shape when it leaves the screen
    if (shapeY1 > 650)
    {
        shapeY1 = -50;
    }

    if (shapeY2 > 650)
    {
        shapeY2 = -50;
    }

    if (shapeY3 > 650)
    {
        shapeY3 = -50;
    }

    if (shapeY4 > 650)
    {
        shapeY4 = -50;
    }

    if (shapeY5 > 650)
    {
        shapeY5 = -50;
    }

    if (shapeY6 > 650)
    {
        shapeY6 = -50;
    }

    if (shapeY7 > 650)
    {
        shapeY7 = -50;
    }

    if (shapeY8 > 650)
    {
        shapeY8 = -50;
    }

    noStroke();
}

// Title screen
function Menu()
{
    background(0);
    GeometricBackground();

    fill(255);
    textAlign(CENTER);

    textSize(100);
    text("METEOR DODGE", 500, 250);

    textSize(25);
    text("PRESS ENTER TO OPEN INSTRUCTIONS", 500, 420);
}

// INSTRUCTIONS SCREEN
function Instructions()
{
    background(0);
    GeometricBackground();

    // Instruction panel
    fill(15, 25, 45);
    stroke(70, 190, 255);
    strokeWeight(3);
    rect(200, 95, 600, 420);

    noStroke();
    fill(255);
    textAlign(CENTER);

    textSize(38);
    text("HOW TO PLAY", 500, 165);

    textSize(20);
    text("Use the ARROW KEYS to move", 500, 230);
    text("UP, DOWN, LEFT, RIGHT", 500, 270);
    text("Avoid the falling meteors!", 500, 315);
    text("Each meteor dodged earns one point", 500, 355);

    fill(70, 190, 255);
    textSize(24);
    text("PRESS ENTER TO START", 500, 465);
}

// GAMEPLAY
function Game()
{
    background(8, 12, 30);

    // Small stars in the background
    noStroke();
    fill(255);
    ellipse(100, 100, 3, 3);
    ellipse(300, 180, 3, 3);
    ellipse(700, 120, 3, 3);
    ellipse(850, 300, 3, 3);
    ellipse(500, 250, 3, 3);
    ellipse(200, 400, 3, 3);
    ellipse(600, 450, 3, 3);
    ellipse(900, 500, 3, 3);

    // GAME TIME
    let currentTime = millis() - startTime;
    survivalTime = floor(currentTime / 1000);
    let minutes = floor(survivalTime / 60);
    let seconds = survivalTime % 60;

    if (seconds < 10)
    {
        timeText = minutes + ":0" + seconds;
    }
    else
    {
        timeText = minutes + ":" + seconds;
    }

    // GRADUALLY INCREASE OF TIME SPEED
    difficulty = currentTime / 60000;

    // CONTINUOUS SPACESHIP MOVEMENT
    if (keyIsDown(LEFT_ARROW))
    {
        shipX -= shipSpeed;
    }

    if (keyIsDown(RIGHT_ARROW))
    {
        shipX += shipSpeed;
    }

    if (keyIsDown(UP_ARROW))
    {
        shipY -= shipSpeed;
    }

    if (keyIsDown(DOWN_ARROW))
    {
        shipY += shipSpeed;
    }

    // KEEP SPACESHIP INSIDE CANVAS
    if (shipX < 40)
    {
        shipX = 40;
    }

    if (shipX > 960)
    {
        shipX = 960;
    }

    if (shipY < 50)
    {
        shipY = 50;
    }

    if (shipY > 550)
    {
        shipY = 550;
    }

    // DRAW SPACESHIP
    Spaceship();

    // MOVE AND DRAW METEORS
    meteorY1 = updateMeteor(meteorX1, meteorY1, meteorSize1, meteorSpeed1, 1);
    meteorY2 = updateMeteor(meteorX2, meteorY2, meteorSize2, meteorSpeed2, 2);
    meteorY3 = updateMeteor(meteorX3, meteorY3, meteorSize3, meteorSpeed3, 3);
    meteorY4 = updateMeteor(meteorX4, meteorY4, meteorSize4, meteorSpeed4, 4);
    meteorY5 = updateMeteor(meteorX5, meteorY5, meteorSize5, meteorSpeed5, 5);
    meteorY6 = updateMeteor(meteorX6, meteorY6, meteorSize6, meteorSpeed6, 6);
    meteorY7 = updateMeteor(meteorX7, meteorY7, meteorSize7, meteorSpeed7, 7);
    meteorY8 = updateMeteor(meteorX8, meteorY8, meteorSize8, meteorSpeed8, 8);

    // SCORE DISPLAY
    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(22);
    text("TIME: " + timeText, 25, 35);
    text("SCORE: " + score, 25, 65);
}

// UPDATE MOVEMENT OF METEOR
function updateMeteor(x, y, size, speed, number)
{
    // METEOR MOVING DOWN
    y += speed + difficulty;

    // DRAW METEOR
    meteor(x, y, size);

    // CHECK COLLISION WITH SPACESHIP
    if (y > shipY - size - 25)
    {
        if (y < shipY + size + 25)
        {
            if (x > shipX - size - 30)
            {
                if (x < shipX + size + 30)
                {
                    gameState = 3;
                }
            }
        }
    }
    // METEOR PASSED THE BOTTOM OF SCREEN
    if (y > 650)
    {
        score += 1;

        // RESET METEOR TO COME DOWN FROM ABOVE THE SCREEN
        y = random(-400, -50);

        // NEW RANDOM X POSITION OF METEOR
        if (number === 1)
        {
            meteorX1 = random(40, 960);
        }
        else if (number === 2)
        {
            meteorX2 = random(40, 960);
        }
        else if (number === 3)
        {
            meteorX3 = random(40, 960);
        }
        else if (number === 4)
        {
            meteorX4 = random(40, 960);
        }
        else if (number === 5)
        {
            meteorX5 = random(40, 960);
        }
        else if (number === 6)
        {
            meteorX6 = random(40, 960);
        }
        else if (number === 7)
        {
            meteorX7 = random(40, 960);
        }
        else if (number === 8)
        {
            meteorX8 = random(40, 960);
        }
    }

    return y;
}

// DRAW METEOR
function meteor(x, y, size)
{
    fill(220, 100, 65);
    stroke(255, 170, 100);
    strokeWeight(2);

    beginShape();

    vertex(x - size * 0.3, y - size);
    vertex(x + size * 0.3, y - size * 0.8);
    vertex(x + size * 0.8, y - size * 0.3);
    vertex(x + size, y + size * 0.2);
    vertex(x + size * 0.7, y + size * 0.7);
    vertex(x + size * 0.2, y + size);
    vertex(x - size * 0.4, y + size * 0.9);
    vertex(x - size, y + size * 0.4);
    vertex(x - size, y - size * 0.2);
    vertex(x - size * 0.7, y - size * 0.7);

    endShape(CLOSE);
    noStroke();
}

// DRAW SPACESHIP
function Spaceship()
{
    // MAIN BODY
    fill(175, 190, 215);
    stroke(255);
    strokeWeight(2);
    quad(shipX - 18, shipY + 25, shipX + 18, shipY + 25, shipX + 12, shipY - 25, shipX - 12, shipY - 25);

    // NOSE
    fill(220, 230, 240);
    triangle(shipX -12, shipY - 25, shipX + 12, shipY - 25, shipX, shipY - 45);

    // WINGS
    fill(60, 140, 220);
    triangle(shipX - 12, shipY, shipX - 35, shipY + 25, shipX - 15, shipY + 25);
    triangle(shipX + 12, shipY, shipX + 35, shipY + 25, shipX + 15, shipY + 25);

    // Cockpit
    fill(80, 220, 255);
    ellipse(shipX, shipY - 10, 13, 22);

    // Engine
    fill(255, 160, 40);
    triangle(shipX - 8, shipY + 25, shipX + 8, shipY + 25, shipX, shipY + 42);

    noStroke();
}

// GAME OVER SCREEN
function GameOver()
{
    background(0);
    GeometricBackground();

    fill(255, 80, 80);
    textAlign(CENTER);
    textSize(55);
    text("GAME OVER", 500, 220);

    fill(255);
    textSize(25);
    text("Survival time: " + timeText, 500, 295);
    text("Final Score: " + score, 500, 340)

    textSize(22);
    text("PRESS ENTER TO TRY AGAIN", 500, 425);
}


// RESET GAME
function resetGame()
{
    // RESET SPACESHIP
    shipX = 500;
    shipY = 500;

    // RANDOM METEOR POSITION
    meteorX1 = random(40, 960);
    meteorX2 = random(40, 960);
    meteorX3 = random(40, 960);
    meteorX4 = random(40, 960);
    meteorX5 = random(40, 960);
    meteorX6 = random(40, 960);
    meteorX7 = random(40, 960);
    meteorX8 = random(40, 960);

    // METEORS START AT DIFFERENT HEIGHTS ABOVE THE SCREEN
    meteorY1 = -100;
    meteorY2 = -250;
    meteorY3 = -400;
    meteorY4 = -550;
    meteorY5 = -700;
    meteorY6 = -850;
    meteorY7 = -1000;
    meteorY8 = -1150;

    //RESET DIFFICULTY AND SCORE
    difficulty = 0;
    score = 0;
    survivalTime = 0;
    timeText = "0:00";

    //START TIMING AGAIN
    startTime = millis();
}


// KEYBOARD CONTROLS
function keyPressed()
{
    if (keyCode === 13)
    {
        if (gameState === 0)
        {
            gameState = 1;
        }
        else if (gameState === 1)
        {
            resetGame();
            gameState = 2;
        }
        else if (gameState === 3)
        {
            resetGame();
            gameState = 2;
        }
    }
}

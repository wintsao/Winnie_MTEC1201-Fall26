/*

Name: Winnie Tsao
Title: Road
Drawing of a road with mountains using different primitive shapes. 

*/

//set up function to run code
function setup() 
{
    //setting size of canvas
    createCanvas(1000, 600); 

    //change of backgroung color
    background(135, 206, 235);

    //fill color for the ground
    fill(154, 205, 50);

    //draw ractangle as the ground
    rect(0, 400, 1000, 200);

    //fill color for the road
    fill(169, 169, 169);

    //draw quadrilateral as the road
    quad(400, 400, 600, 400, 700, 600, 300, 600);

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

    //fill color for the sun
    fill(255, 255, 0);

    //draw ellipse as the sun
    ellipse(100, 100, 100, 100);
}

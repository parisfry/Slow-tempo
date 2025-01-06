let steps = 360 * 1; //decreasing the number of steps to create more jagged movements 
let r = 32; //decreaing the radius of the shape
let noiseScale = 0.02; //increasing the noise scale to create more movement
const noiseAmount = 350; //increasing the noise amount to create more movement
 
function setup() {
 createCanvas(400, 400);
 noFill();
 stroke(255, 50);
 background(0);
 r = 400 / 2.5;
}

function distortedWave() { //changing the shape to distortedWave to have more interesting free flowing lines
  beginShape();
  for (let i = 0; i <= steps; i++) {
    x = width / 2 + r * cos((TWO_PI * i) / steps);
    y = height / 2 + r * sin((TWO_PI * i) / steps); 
    x += map(noise(noiseScale * x, noiseScale * y, frameCount / 700), 0, 1, -noiseAmount, noiseAmount);
    y += map(noise(noiseScale * x, noiseScale * y, 1), 0, 1, -noiseAmount, noiseAmount);
    vertex(x, y);
  }
  endShape();
}
 
function draw() {
 background(200,20);//changing the background colour to create more contrast 
 stroke(25);
 distortedWave();
}
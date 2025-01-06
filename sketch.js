let steps = 360 * 3;
let r = 320;
let noiseScale = 0.03; //increasing the noise scale to create more sporadic and irregular movements
const noiseAmount = 500;
 
function setup() {
   createCanvas(400, 400);
   noFill();
   stroke(255, 50);
   background(0);
 r = 400 / 2.5;
}
 
function distortedSpiral(turns = 5) { //use distorted spiral with 5 turns to create a really irregualr shape 
 beginShape();
 for (let i = 0; i <= steps; i++) {
 
   let t = i / steps;
   let spiralRadius = r * t * turns; // Expanding radius
   let angle = TWO_PI * t * turns;
   let x = width / 2 + spiralRadius * cos(angle);
   let y = height / 2 + spiralRadius * sin(angle);
   x += map(noise(noiseScale * x, noiseScale * y, frameCount / 500), 0, 1, -noiseAmount, noiseAmount);
   y += map(noise(noiseScale * x, noiseScale * y, 1), 0, 1, -noiseAmount, noiseAmount);
   
   let hue = map(angle + frameCount * 0.01, 0, TWO_PI * turns, 0, 255); //map the colour to the angle of spiral
   let brightness = map(spiralRadius, 0, r * turns, 50, 255); // Brightness increases with radius
   stroke(hue, 255, brightness, 100); // Set stroke color with transparency
   
   vertex(x, y);
 }
 endShape();
}
 
function draw() {
 colorMode(HSB, 255); // Use Hue, Saturation, Brightness mode for color
 background(0,10);
 distortedSpiral(50);
}
 
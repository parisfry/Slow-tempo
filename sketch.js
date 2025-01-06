let steps = 360 * 100;//increasing the number of steps to ensure a smoother shape 
let r = 100; //decreasing the radius to have a smaller shape
let noiseScale = 0.003; //decreasing the noiseScale to create smooter movements
const noiseAmount = 300; //increasing the noise amount to have more movement within the shape 
 
function setup() {
 createCanvas(400, 400);
 noFill();
 stroke(255, 50); //stroke colour white whith low opacity to create an echo effect
 background(200);//changing the background value to a lighter shade of greyscale 
}
 
function distortedCircle() {
 beginShape();
 for (let i = 0; i <= steps; i++) {
   x = width / 2 + r * cos((TWO_PI * i) / steps);
   y = height / 2 + r * sin((TWO_PI * i) / steps);
   x += map(
     noise(noiseScale * x, noiseScale * y, frameCount / 100),0,1,-noiseAmount,noiseAmount);//changing the framecount to make the movements slower
   y += map(
     noise(noiseScale * x, noiseScale * y, 1), 0,1, -noiseAmount,noiseAmount);
   vertex(x, y);
 }
 endShape();
}
 
function draw() {
 background(0,1); //adding opacity to create an echo effect
 stroke(255); //draws the distorted circle in white
 distortedCircle();
}
 
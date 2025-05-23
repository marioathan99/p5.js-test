//draw a brown wooden boat on a water with a sun in the sky and a white sail

function setup() {
  createCanvas(400, 400);
  background(200, 100, 100);
  drawWater();
  drawSun();
  drawBoat();
}
function drawWater() {
  noStroke();
  fill(0, 102, 204); // water color
  rect(0, height / 2, width, height / 2);
}
function drawSun() {
  fill(255, 204, 0); // sun color
  ellipse(width - 100, 100, 80, 80); // sun
}
function drawBoat() {
  // Draw the boat body (all x values within 0-400)
  fill(139, 69, 19); // brown color
  beginShape();
  vertex(120, height / 2 + 30);
  vertex(280, height / 2 + 30);
  vertex(250, height / 2 + 60);
  vertex(150, height / 2 + 60);
  endShape(CLOSE);

  // Draw the sail
  fill(255); // white color
  triangle(200, height / 2 + 30, 200, height / 2 - 50, 250, height / 2 + 30);
}


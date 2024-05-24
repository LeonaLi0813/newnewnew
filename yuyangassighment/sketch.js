function setup() {
  createCanvas(457, 650);
  background(50, 50, 100);
  for (let i = 0; i < width; i += 2) {
    for (let j = 0; j < height; j += 2) {
      let val = noise(i * 0.01, j * 0.01) * 255;
      stroke(val);
      point(i, j);
    }
  }
}

function draw() {
  // We'll add the tree and base in this function.
}
function drawTree() {
  let colors = [color(255, 0, 0), color(0, 255, 0)]; // Red and Green
  let index = 0;
  let startX = width / 2;
  let startY = 150;
  let size = 60;
  let yOffset = 70;

  // Draw the vertical part of the tree
  for (let i = 0; i < 5; i++) {
    fill(colors[index % 2]);
    ellipse(startX, startY + (yOffset * i), size, size);
    index++;
  }

  // Draw the branches
  let branchOffset = 50;
  for (let i = 1; i < 5; i += 2) {
    fill(colors[index % 2]);
    ellipse(startX - branchOffset, startY + (yOffset * i), size, size);
    fill(colors[(index + 1) % 2]);
    ellipse(startX + branchOffset, startY + (yOffset * i), size, size);
    index += 2;
  }

  // Top of the tree
  fill(colors[index % 2]);
  ellipse(startX, startY - 30, size * 1.5, size * 1.5);
}

function draw() {
  drawTree();
}

function drawBase() {
  let baseHeight = height - 30;
  fill(255, 204, 0); // Yellow
  rect(0, baseHeight, width, 30);
  fill(0, 255, 0); // Green
  rect(0, baseHeight - 30, width, 30);
  fill(255, 0, 0); // Red
  rect(0, baseHeight - 60, width, 30);
}

function draw() {
  drawTree();
  drawBase();
}
let shapes = [];
let removeShape = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, shape.width, shape.height);
    }
    if (shape.shapeType === 'circle') {
      circle(shape.x, shape.y, shape.width);
    }
    if(shape.shapeType === 'ellipse'){
      ellipse(shape.x, shape.y, shape.width, shape.height);
    }
  }
  for (let shape of removeShape) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, shape.width, shape.height);
    }
    if (shape.shapeType === 'circle') {
      circle(shape.x, shape.y, shape.width);
    }
  }
}

function mousePressed() {
  addAShape();
}

// when a key is pressed, no ellipse is drawn
function keyPressed() {
  deleteAShape();
}

function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    width: random(10, 100),
    height: random(10, 100),
    color: color(random(0, 255), random(0, 255), random(0, 255)),
    shapeType: random(['square', 'circle', 'ellipse']),
  }
  shapes.push(shape1);
}

function deleteAShape() {
  shape2 = {
    x: mouseX,
    y: mouseY,
    width: random(10, 100),
    height: random(10, 100),
    color: color(random(0, 255), random(0, 255), random(0, 255)),
    shapeType: random(['square', 'circle']),
  }
  removeShape.push(shape2);
}
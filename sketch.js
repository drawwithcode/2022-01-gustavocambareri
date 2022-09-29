let x = 0;
let y = 0;
let z = 0;
let q = 0;
var w = window.innerWidth;
var h = window.innerHeight;
let quadrati = [0, 0, 0, 0];
let randomNumber = 0;
let randomQuadrato = 0;
let rotationparameter = 0;
let toggle_loop = false;
let sfondo = 255;
let paura = 90;
let scalata = 0;
let colore = 0;

//I initialize the color arrays of each square, each square has 4 colors
let col1quad1 = [0, 0, 0];
let col2quad1 = [0, 0, 0];
let col3quad1 = [0, 0, 0];
let col4quad1 = [0, 0, 0];

let col1quad2 = [0, 0, 0];
let col2quad2 = [0, 0, 0];
let col3quad2 = [0, 0, 0];
let col4quad2 = [0, 0, 0];

let col1quad3 = [0, 0, 0];
let col2quad3 = [0, 0, 0];
let col3quad3 = [0, 0, 0];
let col4quad3 = [0, 0, 0];

let col1quad4 = [0, 0, 0];
let col2quad4 = [0, 0, 0];
let col3quad4 = [0, 0, 0];
let col4quad4 = [0, 0, 0];

//i initialize an array for each square, each array contains four RGB triplets
let quad1 = [0, 0, 0, 0];
let quad2 = [0, 0, 0, 0];
let quad3 = [0, 0, 0, 0];
let quad4 = [0, 0, 0, 0];

let quad5 = [0, 0, 0, 0];
let quad6 = [0, 0, 0, 0];
let quad7 = [0, 0, 0, 0];
let quad8 = [0, 0, 0, 0];

let quad9 = [0, 0, 0, 0];
let quad10 = [0, 0, 0, 0];
let quad11 = [0, 0, 0, 0];
let quad12 = [0, 0, 0, 0];

function setup() {
  canvas = createCanvas(w, h);
  rectMode(CENTER);
  //I define the square's position
  x = windowWidth / 2;
  y = windowHeight / 2 + 18;
  z = 100;
  //definisco il frame rate
  frameRate(60);

  //I define colors for each square, copying rgb values from Albers.jpg
  col1quad1 = [189, 72, 61];
  col2quad1 = [183, 90, 81];
  col3quad1 = [199, 69, 59];
  col4quad1 = [199, 67, 49];

  col1quad2 = [164, 104, 47];
  col2quad2 = [173, 111, 47];
  col3quad2 = [187, 99, 39];
  col4quad2 = [208, 114, 37];

  col1quad3 = [219, 170, 49];
  col2quad3 = [205, 120, 37];
  col3quad3 = [187, 100, 39];
  col4quad3 = [170, 44, 33];

  col1quad4 = [200, 174, 90];
  col2quad4 = [201, 180, 75];
  col3quad4 = [217, 181, 107];
  col4quad4 = [207, 194, 64];

  col1quad5 = [213, 223, 168];
  col2quad5 = [225, 225, 225];
  col3quad5 = [215, 207, 213];
  col4quad5 = [231, 217, 135];

  col1quad6 = [87, 95, 55];
  col2quad6 = [131, 131, 131];
  col3quad6 = [108, 107, 116];
  col4quad6 = [92, 91, 92];

  col1quad7 = [165, 183, 214];
  col2quad7 = [164, 164, 160];
  col3quad7 = [191, 176, 110];
  col4quad7 = [210, 178, 83];

  col1quad8 = [49, 84, 60];
  col2quad8 = [74, 131, 131];
  col3quad8 = [158, 161, 157];
  col4quad8 = [204, 181, 99];

  col1quad9 = [220, 215, 203];
  col2quad9 = [204, 206, 202];
  col3quad9 = [199, 204, 204];
  col4quad9 = [191, 199, 201];

  col1quad10 = [97, 97, 100];
  col2quad10 = [82, 101, 87];
  col3quad10 = [68, 119, 76];
  col4quad10 = [64, 113, 112];

  col1quad11 = [66, 115, 106];
  col2quad11 = [50, 87, 99];
  col3quad11 = [50, 87, 99];
  col4quad11 = [48, 83, 112];

  col1quad12 = [120, 79, 62];
  col2quad12 = [92, 92, 93];
  col3quad12 = [73, 127, 123];
  col4quad12 = [86, 151, 121];

  quad1 = [col1quad1, col2quad1, col3quad1, col4quad1];
  quad2 = [col1quad2, col2quad2, col3quad2, col4quad2];
  quad3 = [col1quad3, col2quad3, col3quad3, col4quad3];
  quad4 = [col1quad4, col2quad4, col3quad4, col4quad4];
  quad5 = [col1quad5, col2quad5, col3quad5, col4quad5];
  quad6 = [col1quad6, col2quad6, col3quad6, col4quad6];
  quad7 = [col1quad7, col2quad7, col3quad7, col4quad7];
  quad8 = [col1quad8, col2quad8, col3quad8, col4quad8];
  quad9 = [col1quad9, col2quad9, col3quad9, col4quad9];
  quad10 = [col1quad10, col2quad10, col3quad10, col4quad10];
  quad11 = [col1quad11, col2quad11, col3quad11, col4quad11];
  quad12 = [col1quad12, col2quad12, col3quad12, col4quad12];

  quadrati = [
    quad1,
    quad2,
    quad3,
    quad4,
    quad5,
    quad6,
    quad7,
    quad8,
    quad9,
    quad10,
    quad11,
    quad12,
  ];
}

function draw() {
  // colore = lerpColor("white", "grey", 60);
  // background(colore);

  let mappasfondo = map(mouseX, 0, 255, 0, windowWidth / 40);
  background(mappasfondo);
  console.log(mappasfondo);

  let coloreinizio = color(0, 0, 0);
  let colorefinale = color(255, 255, 255);

  angleMode(DEGREES);
  randomNumber = Math.floor(Math.random() * 12);
  randomQuadrato = quadrati[randomNumber];
  scalata += 3;

  //square1
  push();
  noStroke();
  fill(randomQuadrato[0]);
  square(windowWidth / 2, windowHeight / 2, 600);

  pop();
  // pop();
  //square2
  push();
  noStroke();
  translate(0, 30);
  fill(randomQuadrato[1]);
  square(windowWidth / 2, windowHeight / 2, 500);
  pop();

  //square3
  push();
  noStroke();
  translate(0, 20);
  fill(randomQuadrato[2]);
  square(x, y, 400);
  q = random(500);
  pop();

  //square4
  push();
  noStroke();
  translate(0, 37);
  fill(randomQuadrato[3]);
  rotate(rotationparameter);
  rect(x, y, 300, 300);
  pop();

  //
  push();
  rectMode(CENTER);
  stroke(0);
  fill(0);
  if (mouseIsPressed) {
    rect(windowWidth / 2, windowHeight / 2, 600, 600);
  }
  pop();
  // console.log(frameCount);
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
};

function keyPressed() {
  noLoop();
}

function keyReleased() {
  loop();
}

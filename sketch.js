let angle = 0;

let a = 0;
let b = 0;
let c = 0;
let d = 0;

let coloretto0 = 0;
let oscillatingvalue;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  frameRate(60);
  angleMode(DEGREES);

  let = col1quad1 = color(189, 72, 61);
  let = col2quad1 = color(183, 90, 81);
  let = col3quad1 = color(199, 69, 59);
  let = col4quad1 = color(199, 67, 49);

  let = col1quad2 = color(164, 104, 47);
  let = col2quad2 = color(173, 111, 47);
  let = col3quad2 = color(187, 99, 39);
  let = col4quad2 = color(208, 114, 37);

  let = col1quad3 = color(219, 170, 49);
  let = col2quad3 = color(205, 120, 37);
  let = col3quad3 = color(187, 100, 39);
  let = col4quad3 = color(170, 44, 33);

  let = col1quad4 = color(200, 174, 90);
  let = col2quad4 = color(201, 180, 75);
  let = col3quad4 = color(217, 181, 107);
  let = col4quad4 = color(207, 194, 64);

  let = col1quad5 = color(213, 223, 168);
  let = col2quad5 = color(225, 225, 225);
  let = col3quad5 = color(215, 207, 213);
  let = col4quad5 = color(231, 217, 135);

  let = col1quad6 = color(87, 95, 55);
  let = col2quad6 = color(131, 131, 131);
  let = col3quad6 = color(108, 107, 116);
  let = col4quad6 = color(92, 91, 92);

  let = col1quad7 = color(165, 183, 214);
  let = col2quad7 = color(164, 164, 160);
  let = col3quad7 = color(191, 176, 110);
  let = col4quad7 = color(210, 178, 83);

  let = col1quad8 = color(49, 84, 60);
  let = col2quad8 = color(74, 131, 131);
  let = col3quad8 = color(158, 161, 157);
  let = col4quad8 = color(204, 181, 99);

  let = col1quad9 = color(220, 215, 203);
  let = col2quad9 = color(204, 206, 202);
  let = col3quad9 = color(199, 204, 204);
  let = col4quad9 = color(191, 199, 201);

  let = col1quad10 = color(97, 97, 100);
  let = col2quad10 = color(82, 101, 87);
  let = col3quad10 = color(68, 119, 76);
  let = col4quad10 = color(64, 113, 112);

  let = col1quad11 = color(66, 115, 106);
  let = col2quad11 = color(50, 87, 99);
  let = col3quad11 = color(50, 87, 99);
  let = col4quad11 = color(48, 83, 112);

  let = col1quad12 = color(120, 79, 62);
  let = col2quad12 = color(92, 92, 93);
  let = col3quad12 = color(73, 127, 123);
  let = col4quad12 = color(86, 151, 121);

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
}

function draw() {
  background(220);

  angle = angle + 1;

  oscillatingvalue = sin(angle);

  // let mappedoscillatingvalue = map(oscillatingvalue, -1, 1, 0, 1);
  let mappedoscillatingvalue = abs(oscillatingvalue);

  //lerp1
  let lerp1square1 = lerpColor(col1quad1, col1quad2, mappedoscillatingvalue);
  let lerp2square1 = lerpColor(col1quad3, col1quad2, mappedoscillatingvalue);
  let lerp3square1 = lerpColor(col1quad3, col1quad4, mappedoscillatingvalue);
  let lerp4square1 = lerpColor(col1quad5, col1quad4, mappedoscillatingvalue);
  let lerp5square1 = lerpColor(col1quad5, col1quad6, mappedoscillatingvalue);
  let lerp6square1 = lerpColor(col1quad7, col1quad6, mappedoscillatingvalue);
  let lerp7square1 = lerpColor(col1quad7, col1quad8, mappedoscillatingvalue);
  let lerp8square1 = lerpColor(col1quad9, col1quad8, mappedoscillatingvalue);
  let lerp9square1 = lerpColor(col1quad9, col1quad10, mappedoscillatingvalue);
  let lerp10square1 = lerpColor(col1quad11, col1quad10, mappedoscillatingvalue);
  let lerp11square1 = lerpColor(col1quad11, col1quad12, mappedoscillatingvalue);
  let lerp12square1 = lerpColor(col1quad1, col1quad12, mappedoscillatingvalue);

  //lerp2
  let lerp1square2 = lerpColor(col2quad1, col2quad2, mappedoscillatingvalue);
  let lerp2square2 = lerpColor(col2quad3, col2quad2, mappedoscillatingvalue);
  let lerp3square2 = lerpColor(col2quad3, col2quad4, mappedoscillatingvalue);
  let lerp4square2 = lerpColor(col2quad5, col2quad4, mappedoscillatingvalue);
  let lerp5square2 = lerpColor(col2quad5, col2quad6, mappedoscillatingvalue);
  let lerp6square2 = lerpColor(col2quad7, col2quad6, mappedoscillatingvalue);
  let lerp7square2 = lerpColor(col2quad7, col2quad8, mappedoscillatingvalue);
  let lerp8square2 = lerpColor(col2quad9, col2quad8, mappedoscillatingvalue);
  let lerp9square2 = lerpColor(col2quad9, col2quad10, mappedoscillatingvalue);
  let lerp10square2 = lerpColor(col2quad11, col2quad10, mappedoscillatingvalue);
  let lerp11square2 = lerpColor(col2quad11, col2quad12, mappedoscillatingvalue);
  let lerp12square2 = lerpColor(col2quad1, col2quad12, mappedoscillatingvalue);

  //lerp3
  let lerp1square3 = lerpColor(col3quad1, col3quad2, mappedoscillatingvalue);
  let lerp2square3 = lerpColor(col3quad3, col3quad2, mappedoscillatingvalue);
  let lerp3square3 = lerpColor(col3quad3, col3quad4, mappedoscillatingvalue);
  let lerp4square3 = lerpColor(col3quad5, col3quad4, mappedoscillatingvalue);
  let lerp5square3 = lerpColor(col3quad5, col3quad6, mappedoscillatingvalue);
  let lerp6square3 = lerpColor(col3quad7, col3quad6, mappedoscillatingvalue);
  let lerp7square3 = lerpColor(col3quad7, col3quad8, mappedoscillatingvalue);
  let lerp8square3 = lerpColor(col3quad9, col3quad8, mappedoscillatingvalue);
  let lerp9square3 = lerpColor(col3quad9, col3quad10, mappedoscillatingvalue);
  let lerp10square3 = lerpColor(col3quad11, col3quad10, mappedoscillatingvalue);
  let lerp11square3 = lerpColor(col3quad11, col3quad12, mappedoscillatingvalue);
  let lerp12square3 = lerpColor(col3quad1, col3quad12, mappedoscillatingvalue);
  //lerp4
  let lerp1square4 = lerpColor(col4quad1, col4quad2, mappedoscillatingvalue);
  let lerp2square4 = lerpColor(col4quad3, col4quad2, mappedoscillatingvalue);
  let lerp3square4 = lerpColor(col4quad3, col4quad4, mappedoscillatingvalue);
  let lerp4square4 = lerpColor(col4quad5, col4quad4, mappedoscillatingvalue);
  let lerp5square4 = lerpColor(col4quad5, col4quad6, mappedoscillatingvalue);
  let lerp6square4 = lerpColor(col4quad7, col4quad6, mappedoscillatingvalue);
  let lerp7square4 = lerpColor(col4quad7, col4quad8, mappedoscillatingvalue);
  let lerp8square4 = lerpColor(col4quad9, col4quad8, mappedoscillatingvalue);
  let lerp9square4 = lerpColor(col4quad9, col4quad10, mappedoscillatingvalue);
  let lerp10square4 = lerpColor(col4quad11, col4quad10, mappedoscillatingvalue);
  let lerp11square4 = lerpColor(col4quad11, col4quad12, mappedoscillatingvalue);
  let lerp12square4 = lerpColor(col4quad1, col4quad12, mappedoscillatingvalue);
  //lerp12

  let lerpquad1 = [
    lerp1square1,
    lerp2square1,
    lerp3square1,
    lerp4square1,
    lerp5square1,
    lerp6square1,
    lerp7square1,
    lerp8square1,
    lerp9square1,
    lerp10square1,
    lerp11square1,
    lerp12square1,
    ,
  ];
  let lerpquad2 = [
    lerp1square2,
    lerp2square2,
    lerp3square2,
    lerp4square2,
    lerp5square2,
    lerp6square2,
    lerp7square2,
    lerp8square2,
    lerp9square2,
    lerp10square2,
    lerp11square2,
    lerp12square2,
    ,
  ];
  let lerpquad3 = [
    lerp1square3,
    lerp2square3,
    lerp3square3,
    lerp4square3,
    lerp5square3,
    lerp6square3,
    lerp7square3,
    lerp8square3,
    lerp9square3,
    lerp10square3,
    lerp11square3,
    lerp12square3,
    ,
  ];
  let lerpquad4 = [
    lerp1square4,
    lerp2square4,
    lerp3square4,
    lerp4square4,
    lerp5square4,
    lerp6square4,
    lerp7square4,
    lerp8square4,
    lerp9square4,
    lerp10square4,
    lerp11square4,
    lerp12square4,
    ,
  ];
  fill(0);
  if (angle % 90 == 0) {
    console.log("ciao");

    d += 1;
  }
  if (d > 11) {
    d = 0;
  }

  //square1
  // if (mappedoscillatingvalue == 0) {
  //   d += 1;
  // }
  fill(lerpquad1[d]);
  rect(windowWidth / 2, windowHeight / 2, windowHeight / 1.6);

  console.log(angle);
  // console.log(frameCount);

  //square2
  // if (mappedoscillatingvalue == 0) {
  //   d += 1;
  // }
  translate(0, windowHeight / 40);
  fill(lerpquad2[d]);

  rect(windowWidth / 2, windowHeight / 2, windowWidth / 4.1);

  //square3
  // if (mappedoscillatingvalue == 0) {
  //   d += 1;
  // }
  translate(0, windowHeight / 45);
  fill(lerpquad3[d]);

  rect(windowWidth / 2, windowHeight / 2, windowWidth / 5);

  // square4;

  translate(0, windowHeight / 45);
  // if (mappedoscillatingvalue == 0) {
  //   d += 1;
  // }
  fill(lerpquad4[d]);

  console.log(d);
  console.log(mappedoscillatingvalue);

  rect(windowWidth / 2, windowHeight / 2, windowWidth / 6);
  console.log(angle);
}

function mousePressed() {
  d += 1;
  mappedoscillatingvalue = 0;
}

function keyTyped() {
  if (key === "1") {
    d = 0;
  }
}

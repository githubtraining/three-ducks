function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

var width = window.innerWidth;
var height = window.innerHeight;
var blockwidth = width/10;
var blockheight = height/10;

var w = 'white';
var b = 'black';
var p = 'beige';
var o = 'orange';
var blu = 'blue';

function draw() {
  //Column 1
  fill(color(w));
  rect(0, 0, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight * 2, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight * 3, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight * 4, blockwidth, blockheight)
  fill(color(blu));
  rect(0, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(0, blockheight * 6, blockwidth, blockheight)
  fill(color(b));
  rect(0, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(0, blockheight * 9, blockwidth, blockheight)

  //Column 2
  fill(color(w));
  rect(blockwidth, 0, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth, blockheight * 2, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth, blockheight * 3, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth, blockheight * 4, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth, blockheight * 5, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth, blockheight * 6, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth, blockheight * 9, blockwidth, blockheight)

var n = 2;
  //Column 3
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(blu));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 3;
  //Column 4
  fill(color(b));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(o));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(o));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 4;
  //Column 5
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(blu));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 5;
  //Column 6
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color('red'));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 6;
  //Column 7
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(blu));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 7;
  //Column 8
  fill(color(b));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(o));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(o));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 8;
  //Column 9
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(p));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(blu));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)

var n = 9;
  //Column 10
  fill(color(w));
  rect(blockwidth * n, 0, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 2, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 3, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 4, blockwidth, blockheight)
  fill(color(b));
  rect(blockwidth * n, blockheight * 5, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 6, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 7, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 8, blockwidth, blockheight)
  fill(color(w));
  rect(blockwidth * n, blockheight * 9, blockwidth, blockheight)
}

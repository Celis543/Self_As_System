let bubbles = [];

let flower;
let kittens = [];
//let img;

function preload() {
  face = loadImage('IMG_0317.PNG');
  for (let i = 0; i < 53; i++) {
    kittens[i] = loadImage(`test/img${i}.jpg`);
  }
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    let x = random(0,500);
    let y = random(height);
    let r = 200;
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = random(kittens);
  }


  move() {
    this.x = this.x;
    this.y = this.y + 1
    if(this.y>height){
      this.kitten = random(kittens);
      this.y=0;
    }
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
    imageMode(CENTER);
    image(face,width/2,height/2,width,height)
  }
}
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 20);
  }
}
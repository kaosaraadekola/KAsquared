//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function mouseClicked() {
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}

function setup() {
	createCanvas(800, 600);
	background(img);
}

function draw() {
	snowfall();
	snowman();
}

let snowflakes = [];

function snowfall() {
  background(img);

  if (frameCount % 3 === 0) {
    let snowflake = {
      x: random(width),
      y: random(-10, -5),
      d: random(5, 30),
      speedX: random(-1, 1),
      speedY: random(1, 3),
    };
    snowflakes.push(snowflake);
  }

  for (let flake of snowflakes) {
		flake.x += flake.speedX;
		flake.y += flake.speedY;

    noStroke();
    fill(255);
    circle(flake.x, flake.y, flake.d);
  }
}

function snowman() {
	
	strokeWeight(3);

  //head, torso and base
	stroke("black")
	circle(400,170,100);
	circle(400,290,140);
	circle(400,450,180);
	
	//nose
  fill("orange");
	circle(400,170,25);
	
	//mouth
	fill("black");
	circle(400,200,5);
	circle(390,197,5);
	circle(410,197,5);
	circle(380,190,5);
	circle(420,190,5);
	
	//eyes
	fill("black");
	circle(380,150,10);
	circle(420,150,10);
	
	//hat
	fill("blue");
	rect(360, 110, 80, 20, 5);
	rect(380, 70, 40, 40, 5, 5, 0, 0);
	
	//scarf
	fill("blue");
	rect(365, 210, 70, 20, 5);
	rect(370, 230, 20, 100);
	fill("white");
	stroke("white");
	triangle(370,331,380,320,390,331);
	
	//buttons
	fill("black");
	stroke("black");
	circle(400,290,10);
	circle(400,320,10);
	circle(400,260,10);
	circle(400,450,10);
	circle(400,480,10);
	circle(400,420,10);
	
	//arms
	line(220,190,330,290);
	line(470,290,570,190);
	
	//fingers
	line(240,210,220,210);
	line(240,210,240,190);
	line(550,210,550,190);
	line(550,210,570,210);

}

function preload() {
  img = loadImage('https://www.farmersalmanac.com/wp-content/uploads/2020/11/Diamond-Dust-Snow-i861983318.jpeg');
}
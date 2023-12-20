function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}

function setup() {
	createCanvas(800, 600);
	background(img);
	noLoop();
}

function draw() {
	snowman();
    moon();
    message();

	for (let x = 50; x < 300; x = x + 70) {
		pineTree(x, random(380, 520), random(20, 70), 30);
	}
}

function mousePressed() {
	background(img);
	redraw();
}

function message(){
	noStroke();
    textSize(30);
	fill("black");
    text('Merry Christmas from KAsquared!', 200, 40);
}

function pineTree(x, y, b, h) {

	//"x" and "y" are the coordinates for the top of the tree
	//"b" is the base of the triangles
	//"h" is the height of each triangle

	let pineTreeColors = [
		'#006400', // Dark Green
		'#228B22', // Forest Green
		'#8B4513', // Saddle Brown
		'#556B2F', // Dark Olive Green
		'#2E8B57' // Sea Green
	];

	fill(random(pineTreeColors));
	stroke("black");

	triangle(x, y + h, x - 0.5 * b, y + 2 * h, x + 0.5 * b, y + 2 * h);
	triangle(x, y + 0.5 * h, x - 0.5 * b, y + 1.5 * h, x + 0.5 * b, y + 1.5 * h);
	triangle(x, y, x - 0.5 * b, y + h, x + 0.5 * b, y + h);
	line(x, y + 2 * h, x, y + 2.5 * h);
}

function moon() {
    noStroke();
    fill("gray");
    circle(80,80,120);
}

function snowman() {
	
	strokeWeight(3);

  //head, torso and base
	stroke("black");
    fill("white");
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
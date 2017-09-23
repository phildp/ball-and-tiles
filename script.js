var play = false;
var ball;
var paddle;
var tiles = [];

var n = 5;
var m = 6;

function setup() {
	createCanvas(600,600);
	noCursor();
	ball = new Ball();
	paddle = new Paddle();

	var index = 0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < m; j++) {
			tiles[index] = new Tile();
			tiles[index].x = j*tiles[i].w+5*j+60;
			tiles[index].y = i*tiles[i].h+5*i+60;
			index++;
		}
	}
}


function draw() {
	smooth();
	background(51);
	paddle.pos.set(mouseX, 540);
	paddle.display();

	if (tiles.length == 0) {
		play = false;
		textSize(30);
		textAlign(CENTER);
		text("Congratulations!", width/2, 200);
		fill(255);
	}

	for (var i = 0; i < tiles.length; i++) {
		tiles[i].display();
	}
		
	if (!play) {
		ball.pos.set(paddle.pos.x, paddle.pos.y-paddle.h/2-ball.d/2);
		ball.display();
	}
	else {
		ball.hitsPaddle();
		ball.hitsTile();
		ball.hitsWall();
		ball.update();
		ball.display();
	}
}

function mouseClicked() {
	play = true;
	
	if (tiles.length == 0) {
		var index = 0;
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				tiles[index] = new Tile();
				tiles[index].x = j*tiles[i].w+5*j+60;
				tiles[index].y = i*tiles[i].h+5*i+60;
				index++;
			}
		}
	}
}

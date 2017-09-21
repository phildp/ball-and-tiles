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

	for (var i = 0; i < n; i++) {
		tiles[i] = [];
		for (var j = 0; j < m; j++) {
			tiles[i][j] = new Tile();
		}
	}
}


function draw() {
	smooth();
	background(51);
	paddle.pos.set(mouseX, 540);
	paddle.display();

	push();
	translate(60,60);
	for (var i = 0; i < n; i++) {
		push();
		for (var j = 0; j < m; j++) {
			tiles[i][j].display();
			translate(tiles[i][j].w+5,0);
		}
		pop();
		translate(0,tiles[i][j-1].h+5);
	}
	pop();
	
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
}
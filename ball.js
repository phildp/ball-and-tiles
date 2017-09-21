function Ball() {
	this.pos = createVector(0,0);
	this.dir = createVector(-1,-1);
	this.d = 15;
	this.vel = createVector(1,1).mult(6);

	this.display = function() {
		fill(255);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
	}

	this.update = function() {
		this.pos.x += this.vel.x * this.dir.x;
		this.pos.y += this.vel.y * this.dir.y;
	}

	this.hitsWall = function() {
		if(this.pos.x+this.d/2 > width || this.pos.x-this.d/2 < 0) {
			this.dir.x *= -1;
		}
		if(this.pos.y+this.d/2 > height || this.pos.y-this.d/2 < 0) {
			this.dir.y *= -1;
		}
	}

	this.hitsPaddle = function() {
		var top = this.pos.y-this.d/2;
		var bottom = this.pos.y+this.d/2;

		var paddleTop = paddle.pos.y-paddle.h/2;
		var paddleBottom = paddle.pos.y+paddle.h/2;

		if (this.pos.x > paddle.pos.x-paddle.w/2-this.d/2 && this.pos.x < paddle.pos.x+paddle.w/2+this.d/2) {
			if (this.dir.y > 0) {
				if (top < paddleTop && bottom > paddleTop) {
					this.dir.y *= -1;
				}
			}
			else {
				if (top < paddleBottom && bottom > paddleBottom) {
					this.dir.y *= -1;
				}
			}
		}
	}

	this.hitsTile = function() {
		for (var i = 0; i < tiles[i].length; i++) {
			for (var j = 0; j < tiles[j].length; j++) {
				tiles[i][j]
			}
		}
	}
}
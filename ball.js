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

		var offset = map(this.pos.x - paddle.pos.x, -35, 35, -1, 1);


		if (this.pos.x > paddle.pos.x-paddle.w/2-this.d/2 && this.pos.x < paddle.pos.x+paddle.w/2+this.d/2) {
			if (this.dir.y > 0) {
				if (top < paddleTop && bottom > paddleTop) {
					this.dir.y *= -1;
					this.dir.x = offset;
				}
			}
			else {
				if (top < paddleBottom && bottom > paddleBottom) {
					this.dir.y *= -1;
					this.dir.x *= offset;
				}
			}
		}
	}

	this.hitsTile = function() {
		var left = this.pos.x-this.d/2;
		var right = this.pos.x+this.d/2;
		var top = this.pos.y-this.d/2;
		var bottom = this.pos.y+this.d/2;

		for (var i = 0; i < tiles.length; i++) {
			var tile = tiles[i];
			var tleft = tile.x;
			var tright = tile.x+tile.w;
			var ttop = tile.y;
			var tbottom = tile.y+tile.h;

			if (this.pos.y >= ttop && this.pos.y <= tbottom) {
				if (left < tright && right > tright) { //hit from right
					this.dir.x *= -1;
					tiles.splice(i,1);
				}
				else if (right > tleft && left < tleft) { //hit from left
					this.dir.x *= -1;
					tiles.splice(i,1);
				}
			}
			else if (this.pos.x >= tleft && this.pos.x <= tright) {
				if (bottom > ttop && top < ttop) { //hit from top
					this.dir.y *= -1;
					tiles.splice(i,1);
				}
				else if (top < tbottom && bottom > tbottom) { //hit from bottom
					this.dir.y *= -1;
					tiles.splice(i,1);
				}
			}
		}
	}
}
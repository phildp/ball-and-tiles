function Paddle() {
	this.pos = createVector(0,0);
	this.w = 70;
	this.h = 12;

	this.display = function() {
		rectMode(CENTER);
		fill(255);
		noStroke();
		this.constrain();
		rect(this.pos.x, this.pos.y, this.w, this.h, 6, 6, 6, 6);
	}

	this.constrain = function() {
		if (this.pos.x+this.w/2 > width) {
			this.pos.x = width-this.w/2;
		}
		else if (this.pos.x-this.w/2 < 0) {
			this.pos.x = this.w/2;
		}
	}
}
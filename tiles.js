function Tile() {
	this.w = (width-120-5*m)/m;
	this.h = 20;
	this.x = 0;
	this.y = 0;

	this.display = function() {
		noStroke();
		fill(255);
		rectMode(CORNER);
		rect(this.x, this.y, this.w, this.h);
	}
}
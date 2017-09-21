function Tile() {
	this.w = (width-120-5*m)/m;
	this.h = 20;
	this.x, this.y;

	this.display = function() {
		noStroke();
		fill(255);
		rectMode(CORNER);
		rect(0, 0, this.w, this.h);
	}
}
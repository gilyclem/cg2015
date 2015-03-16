/* exercise08 write a constructor function Point2D that create a 2D point given its x and y coordinates. 
exercise08a write a contructor function Edge that create an edge given its two vertices (i.e. two points).
exercise08b write a method length for Edge that compute the length of the edge. */

//costruttore di punto, coordinate x ed y
function Point2D (x,y) {
	this.x=x;
	this.y=y;
}
//info di punto
Point2D.prototype.info = function () {
  console.log('x: '+this.x+', y: '+this.y);
};

//un segmento è composto da due punti
function Edge (x1,y1,x2,y2) {
	this.p1=new Point2D(x1,y1);
	this.p2=new Point2D(x2,y2);
}

Edge.prototype.info = function () {
	this.p1.info();
	this.p2.info();
};

//valore assoluto, distanza fra coordinate e teorema di pitagora
Edge.prototype.length_edge = function () {
    return Math.sqrt(Math.pow(Math.abs(this.p1.x-this.p2.x),2)+Math.pow(Math.abs(this.p1.y-this.p2.y),2));
};

//utilizzo
var point = new Point2D(3,4);

var edge = new Edge(5,6,3,4);

edge.info();

console.log(edge.length_edge());

console.log("\n");



/* write a constructor function Trinagle that create a triangle given its three edges.
exercise09a write a method perimeter for Triangle that compute the perimeter of the triangle.
exercise09b write a method area for Triangle that compute the area of the triangle (Do you remeber the Erone's formula?). */
//costruttore del triangolo
function Triangle (l1,l2,l3) {
	this.l1=l1;
	this.l2=l2;
	this.l3=l3;
}

Triangle.prototype.info = function () {
  console.log('l1: '+this.l1+', l2: '+this.l2+',l3: '+this.l3);
};

//somma dei tre lati
Triangle.prototype.perimeter = function () {
    return this.l1+this.l2+this.l3;
};

//formula di erone
Triangle.prototype.area = function () {
    return Math.sqrt((this.l1+this.l2+this.l3)*(-this.l1+this.l2+this.l3)*(this.l1-this.l2+this.l3)*(this.l1+this.l2-this.l3))/4;
};

//utilizzo
var triangle = new Triangle(3,4,5);

triangle.info();
console.log("perimetro="+triangle.perimeter());
console.log("area="+triangle.area());
console.log("\n");

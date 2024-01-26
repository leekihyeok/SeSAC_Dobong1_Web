class Shape {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  getArea() {
    return this.row * this.column;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(row, column) {
    super(row, column);
  }

  getDiagnol() {
    return Math.sqrt(this.row ** 2 + this.column ** 2);
  }
}

class Triangle extends Shape {
  constructor(row, column) {
    super(row, column);
  }

  getArea() {
    return (this.row * this.column) / 2;
  }
}

class Circle extends Shape {
  constructor(row, column, radius) {
    super(row, column);
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec1.getDiagnol());
let tri = new Triangle(3, 4);
console.log(tri.getArea());
let circle = new Circle(3, 4, 5);
console.log(circle.getArea());

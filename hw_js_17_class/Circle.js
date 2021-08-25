class Circle {
  constructor(radius){
    this._radius = radius;
  }
  get radius(){
    return `Радиус окружности равен: ${this._radius}`;
  }
  set radius(radius){
    if(typeof radius === 'number'){
      this._radius = radius;
    }
  }
  get diameter(){
    return `Диаметр окружности равен: ${this._radius * 2}`;
  }
  areaCircle(){
    return `Площадь окружности с радиусом ${this._radius} составляет: ${(Math.PI * Math.pow(this._radius, 2)).toFixed(2)}`;
  }
  longCircle(){
    return `Длина окружности с радиусом ${this._radius} составляет: ${(2 * Math.PI * this._radius).toFixed(2)}`;
  }
}

let circle = new Circle(3);
circle.radius = 20;
console.log(circle);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.areaCircle());
console.log(circle.longCircle());
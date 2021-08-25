//------------------------------------------------------------------------------
//создание макета объекта авто
function Car (make, model, year, speed){
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = speed;
}
let inputsForCar = document.querySelectorAll('.parent_auto input');
let outAutoResult = document.querySelector('.outTime');

//функция вывода объекта
function outAuto(){
  let btn = document.querySelector('.getAuto');
  btn.addEventListener('click', () => {
    let arr = [];
    inputsForCar.forEach(elem => arr.push(elem.value));
    let changeElemOfArr = [];
    changeElemOfArr = arr.map(elem => {
      return elem = (elem == '')?'Ой, забыли ввести!': elem;
    });
      let car = new Car (...changeElemOfArr);
      let arrForOut = [];
      for (let key in car){
        arrForOut.push(` ${key}: ${car[key]}`);
        outAutoResult.innerHTML = arrForOut;
      }
  });
}
outAuto();

//функция вывода расчета времени
function outTimeForDistance(){
  let btn = document.querySelector('.getTime');
  btn.addEventListener('click', () => {
    let arr = [];
    inputsForCar.forEach(elem => arr.push(elem.value));
    if (arr.every(elem => elem != '')){
      outAutoResult.innerHTML = calcTime(new Car (...arr), arr[arr.length - 1]);
    }else{
      outAutoResult.innerHTML = `Невозможно вывести время преодоления расстояние.`;
    }
  });
}
outTimeForDistance();

//функция считает время за которое можно преодолеть заданную дистанцию с отдыхом на 1 час каждые 4 часа
function calcTime(obj, distance){
let time = distance / obj.speed;
let extraTime = Math.floor(time / 4).toFixed(2);
let minutes = calcMinutes(time) + calcMinutes(extraTime);
return `Заданное расстояние в ${distance} км со средней скоростью ${obj.speed} км/ч вы преодолеете за: ${truncNum(time) + truncNum(extraTime) + convertMinutesToHours(minutes)[0]} часа(ов) ${convertMinutesToHours(minutes)[1]} минут(ы) с учетом ${truncNum(extraTime)} часа(ов) отдыха.`;
}
//получение целой части времени - часы
function truncNum(num){
  return Math.trunc(num);
}
//получение дробной части - минуты
function calcMinutes(num){
  return 60 * (num - truncNum(num));
}
// конвертация переданных минух в часы и минуты (возвращение массива, при > 60 часы, минуты и при < 60 - 0 часов, минут)
function convertMinutesToHours(minutes){
  if (minutes > 60){
  return [Math.trunc(minutes / 60), minutes % 60];
}else{
return [0, minutes.toFixed(0)];
}
}


//------------------------------------------------------------------------------
// в общем операции над дробями
function Fraction(numerator, denominator){
  this.numerator = numerator;
  this.denominator = denominator;
}

let outFractionsResult = document.querySelector('.outFractionResult');

function outFractionResults(){
let nume1 = document.querySelector('.numerator1');
let btnSum = document.querySelector('.getSum');
let deno1 = document.querySelector('.denominator1');
let btnMinus = document.querySelector('.getMinus');
let nume2 = document.querySelector('.numerator2');
let btnMulti = document.querySelector('.getMulti');
let deno2 = document.querySelector('.denominator2');
let btnDivision = document.querySelector('.getDivision');
let btnReduction = document.querySelector('.getReduction');

//вывод суммы дробей
btnSum.addEventListener('click', () => {
  let arr = [nume1.value, deno1.value, nume2.value, deno2.value];
if(checkInputsValues(arr) == false){
  outFractionsResult.innerHTML = 'Не выполнено условие ввода данных.';
}else{
  let num1 = new Fraction(nume1.value, deno1.value);
  let num2 = new Fraction(nume2.value, deno2.value);
  outFractionsResult.innerHTML = `Результат выполнения суммы: ${sum(num1, num2).numerator} / ${sum(num1, num2).denominator} или ${reduction(sum(num1, num2)).int} целая(ых) ${reduction(sum(num1, num2)).numerator} / ${reduction(sum(num1, num2)).denominator}.`;
}
});

//вывод вычитания дробей
btnMinus.addEventListener('click', () => {
  let arr = [nume1.value, deno1.value, nume2.value, deno2.value];
if(checkInputsValues(arr) == false){
  outFractionsResult.innerHTML = 'Не выполнено условие ввода данных.';
}else{
  let num1 = new Fraction(nume1.value, deno1.value);
  let num2 = new Fraction(nume2.value, deno2.value);
  outFractionsResult.innerHTML = `Результат выполнения вычитания: ${minus(num1, num2).numerator} / ${minus(num1, num2).denominator} или ${reduction(minus(num1, num2)).int} целая(ых) ${reduction(minus(num1, num2)).numerator} / ${reduction(minus(num1, num2)).denominator}.`;
}
});

//вывод умножения дробей
btnMulti.addEventListener('click', () => {
  let arr = [nume1.value, deno1.value, nume2.value, deno2.value];
if(checkInputsValues(arr) == false){
  outFractionsResult.innerHTML = 'Не выполнено условие ввода данных.';
}else{
  let num1 = new Fraction(nume1.value, deno1.value);
  let num2 = new Fraction(nume2.value, deno2.value);
  outFractionsResult.innerHTML = `Результат выполнения умножения: ${multi(num1, num2).numerator} / ${multi(num1, num2).denominator} или ${reduction(multi(num1, num2)).int} целая(ых) ${reduction(multi(num1, num2)).numerator} / ${reduction(multi(num1, num2)).denominator}.`;
}
});

//вывод деления дробей
btnDivision.addEventListener('click', () => {
  let arr = [nume1.value, deno1.value, nume2.value, deno2.value];
if(checkInputsValues(arr) == false){
  outFractionsResult.innerHTML = 'Не выполнено условие ввода данных.';
}else{
  let num1 = new Fraction(nume1.value, deno1.value);
  let num2 = new Fraction(nume2.value, deno2.value);
  outFractionsResult.innerHTML = `Результат выполнения деления: ${division(num1, num2).numerator} / ${division(num1, num2).denominator} или ${reduction(division(num1, num2)).int} целая(ых) ${reduction(division(num1, num2)).numerator} / ${reduction(division(num1, num2)).denominator}.`;
}
});

//вывод сокращенной дроби
btnReduction.addEventListener('click', () => {
  let arr = [nume1.value, deno1.value, nume2.value, deno2.value];
  let num1 = new Fraction(+nume1.value, +deno1.value);
  let num2 = new Fraction(+nume2.value, +deno2.value);
    if (num1.numerator == '' || num1.denominator == '' || num1.numerator == null || num1.denominator == null || num1.numerator == undefined || num1.denominator == undefined || !isFinite(num1.numerator)|| !isFinite(num1.denominator)){
    num1 = num2;
  }else{
    num2 = num1;
  }
  outFractionsResult.innerHTML = `Результат выполнения сокращения: ${reduction(num1).int} целая(ых) ${reduction(num1).numerator} / ${reduction(num1).denominator}.`;
});
}
outFractionResults();

//функция проверки на отсутствие элементов массива
function checkInputsValues(arr){
let flag = false;
for (let elem of arr){
  if (elem == '' || elem == null || elem == undefined || +elem == 0){
    flag = false;
    break;
  }else{
    flag = true;
  }
}
  return flag;
}

//функция сложения дробей
function sum(a, b){
 let numer = a.numerator * b.denominator + b.numerator * a.denominator;
 let deno = (a.denominator == b.denominator)? a.denominator: a.denominator * b.denominator;
 return new Fraction(numer, deno);
}

//функция вычитания дробей
function minus(a, b){
  let numer = a.numerator * b.denominator - b.numerator * a.denominator;
  let deno = a.denominator * b.denominator;
  return new Fraction(numer, deno);
}

//функция умножения дробей
function multi(a, b){
  let numer = a.numerator * b.numerator;
  let deno = a.denominator * b.denominator;
  return new Fraction(numer, deno);
}

//функция деления дробей
function division(a, b){
  let numer = a.numerator * b.denominator;
  let deno = a.denominator * b.numerator;
  return new Fraction(numer, deno);
}

//функция сокращения дроби
function reduction(a){
  let int = Math.trunc(a.numerator / a.denominator);
  let black_num = String(((a.numerator / a.denominator) - int)).split('');
  let numer = black_num.splice(black_num.indexOf('.') + 1, 1);
  let num = new Fraction();
  if (numer == 0){
    num.numerator = int;
    num.denominator = 1;
  }else{
    num.int = int;
    num.numerator = a.numerator - num.int * a.denominator;
    num.denominator = a.denominator;
  }
return num;
}

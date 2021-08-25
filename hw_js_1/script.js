function outName(){
//---------------------------------------------
//let name = prompt('Ваше имя, сэр?','');
//alert(`Привет, ${name}`);
//---------------------------------------------
alert(`Привет, ${prompt('Ваше имя, сэр?','')}!`);
}
//outName();

function getAge(){
let year;
const yearNow = new Date().getFullYear();
do {
  year = +prompt('Введите год вашего рождения:', '');
} while(year == null || year == undefined || year == '' || year > yearNow || !isFinite(year))
alert('Вам:' + ' ' + (yearNow - year));
}
//getAge();

function getPerimetrOfaSquare(){
  alert('Периметр квадрата равен:' + ' ' + (parseFloat(prompt('Введите длину стороны квадрата:', 0)) * 4));
}
//getPerimetrOfaSquare();

function getAreaOfaCircle(){
let radius = parseFloat(prompt('Введите радиус окружности:', 0));
alert('Площадь окружности равна:' + ' ' + ((Math.PI * Math.pow(radius, 2)).toFixed(2)));
}
//getAreaOfaCircle();

function calcSpeed(){
  let distance = parseFloat(prompt('Введите расстояние между городами:', 0));
  let time = parseFloat(prompt('За сколько часов Вы хотите добраться?', 0));
  alert('Необходимая скорость движения:' + ' ' + ((distance / time).toFixed(1)) + ' ' + 'км/ч.');
}
//calcSpeed();

function getCurrencies(){
const currency = 0.85;
alert(`Это' ${(parseFloat(prompt('Введите количество долларов:', 0)) * currency).toFixed(2)} евро`);
}
//getCurrencies();

function calcQuantityOfFiles(){
  let sizeOfFlash = parseInt(prompt('Введите объем флешки в GB:', 0));
  alert(`На флешку объемом ${sizeOfFlash} GB поместится файлов размером в 820 MB полных: ${Math.floor((sizeOfFlash * 1024) / 820)} шт.`);
}
//calcQuantityOfFiles();

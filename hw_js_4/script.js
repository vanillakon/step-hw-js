function f1(){
let inp = document.querySelector('.enterSum');
let btn = document.querySelector('.btnForSum');
let out = document.querySelector('.outSum');
btn.addEventListener('click', () => {
  let num = inp.value.trim();
  if (!isFinite(num) || num == null || num == '' || num == 'undefined'){
      out.innerHTML = 'Вы ввели не число!';
  }else{
      out.innerHTML = (num >= 200 && num <= 300) ? num = num * 0.97 : (num >= 301 && num <= 500) ? num = num * 0.95 : (num >= 501) ? num = num * 0.93 : 'Вы не получите скидку!';
  }
});
}
f1();
function f2(){
let lengthOfCircle = document.querySelector('.enterCircle');
let perimeterSquare = document.querySelector('.enterSquare');
let out = document.querySelector('.outResult');
let btn = document.querySelector('.btnForResult');
btn.addEventListener('click', () => {
  let circleLength = lengthOfCircle.value.trim();
  let squarePerimetr = perimeterSquare.value.trim();
  if (!isFinite(circleLength) || circleLength == null || circleLength == '' || circleLength == undefined || !isFinite(squarePerimetr) || squarePerimetr == null || squarePerimetr == '' || squarePerimetr == undefined){
    out.innerHTML = 'Невозможно посчитать!';
  }else{
    let areaOfaCircle = (Math.pow(circleLength, 2) / (4 * Math.PI)).toFixed(2);
    let squareSide = squarePerimetr / 4;
    let areaOfaSquare = Math.pow(squareSide, 2);
    out.innerHTML = (Math.sqrt(areaOfaSquare) > (2 * Math.sqrt(areaOfaCircle / Math.PI)))? 'Круг поместится в квадрат!' : 'Круг не поместится в квадрат!';
  }
});
}
f2();
function f3(){
let out = document.querySelector('.outTestResult');
let btn = document.querySelector('.pushTestResult');
let firstRadioPack = document.getElementsByName('radio1');
let secondRadioPack = document.getElementsByName('radio2');
let thirdRadioPack = document.getElementsByName('radio3');
btn.addEventListener('click', () => {
  let arrOfRadio = [...firstRadioPack, ...secondRadioPack, ...thirdRadioPack];
  let result = 0;
  for (let elem of arrOfRadio){
    if (elem.checked == true){
      result += +elem.value;
    }
  }
  out.innerHTML = `Ваш результат равен: ${result} балла(ов).`;
});
}
f3();
function f4(){
let btn = document.querySelector('.pushDate');
let out = document.querySelector('.outNextDate');
let enterDate = document.querySelector('.enterDate');
btn.addEventListener('click', () => {
  let fullDate = enterDate.value.split(',').reverse();
  if (fullDate == '' || fullDate == null || fullDate == undefined){
    out.innerHTML = 'Невозможно найти дату.';
  }else{
    let date = new Date(+fullDate[0], +fullDate[1] - 1, +fullDate[2]);
    let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    out.innerHTML = `Следующая дата: ${addZero(date2.getDate())}.${addZero(date2.getMonth() + 1)}.${date2.getFullYear()}`;
  }
  enterDate.value = '';
  });

function addZero(num){
  return (+num <= 9) ? num = '0' + num: num;
}
}
f4();

//------------------------------------------------
//сравнение 2-х чисел
function outSortedNumsResult(){
  let enterNum1 = document.querySelector('.enterNum1');
  let enterNum2 = document.querySelector('.enterNum2');
  let outResult = document.querySelector('.outSortedNumsResult');
  let sortedNums = document.querySelector('.sortedNums');
  sortedNums.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    let num2 = enterNum2.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
      outResult.innerHTML = 'Невозможно сравнить, было введено не число.'
    }else{
      outResult.innerHTML = `${sortedNumsV1(+num1, +num2)} больше или при: num1 > num2 = 1, num1 < num2 = -1, num1 == num2 = 0: Результат равен: ${sortedNumsV2(+num1, +num2)} `;
    }
  });
}
outSortedNumsResult();

function sortedNumsV1(num1, num2){
  return (num1 > num2)? num1: (num1 < num2)? num2: 'данные числа равны.';
}

function sortedNumsV2(num1, num2){
  if (num1 > num2) return 1;
  if (num1 < num2) return -1;
  if (num1 == num2) return 0;
}

//------------------------------------------------
//факториал заданного числа
function outFactorialResult(){
let outFactorial = document.querySelector('.outFactorialResult');
let getFactorial = document.querySelector('.getFactorial');
let enterNumForFactorial = document.querySelector('.enterNumForFactorial');
getFactorial.addEventListener('click', () => {
  let num1 = enterNumForFactorial.value.trim();
  if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
    outFactorial.innerHTML = 'Невозможно вывести факториал, было введено не число.'
  }else{
    outFactorial.innerHTML = `Факториал числа ${num1} равен: ${factorialV1(num1)}`;
  }
});
}
outFactorialResult();

function factorialV1(num){
  let result = 1;
  for (let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}

function factorialV2(num){
  return !num ? 1: num * factorialV2(num - 1);
}
//------------------------------------------------
//сложение 3-х цифр в число
function outResultConcatNums(){
  let outConcatNumResult = document.querySelector('.outConcatNumResult');
  let getConcatNum = document.querySelector('.getConcatNum');
  let enterNumsForConcat = document.querySelector('.enterNumsForConcat');
  getConcatNum.addEventListener('click', function(){
    let arrOfValues = enterNumsForConcat.value.split(',');
    if (arrOfValues == null || arrOfValues == '' || arrOfValues === undefined || arrOfValues.length > enterNumsForConcat.dataset.num || arrOfValues.length < enterNumsForConcat.dataset.num ){
      outConcatNumResult.innerHTML = 'Не выполнено условие ввода данных.';
    }else{
      outConcatNumResult.innerHTML = `Согласно заданию ответ равен: ${concatNums(arrOfValues)}`;
    }
    console.log(arrOfValues);
  });
}
outResultConcatNums();
function concatNums(arr){
  return arr.reduce((sum, arg) => sum + arg, '');
}
//------------------------------------------------
//нахождение площади прямоугольника или квадрата
function outAreaOfSquare(){
  let enterNum1 = document.querySelector('.enterNum1ForArea');
  let enterNum2 = document.querySelector('.enterNum2ForArea');
  let outArea = document.querySelector('.outAreaOfSquareResult');
  let getAreaOfSquare = document.querySelector('.getAreaOfSquare');
  getAreaOfSquare.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    let num2 = enterNum2.value.trim();
    if(num1 == '' && num2 == '' || num1 == undefined && num2 == undefined || num1 == null && num2 == null){
      outArea.innerHTML = 'Не выполнено условие ввода данных.';
    }else{
      outArea.innerHTML = `Площадь равна: ${areaSquare(num1, num2)}`;
    }
  });
}
outAreaOfSquare();
function areaSquare(length, width){
  return (width == undefined || width == '')? Math.pow(length, 2): (length == undefined || length == '')? Math.pow(width, 2): length * width;
}
//------------------------------------------------
//проверка числа на совершенное
function outResultNumIsPerfect(){
  let enterNum = document.querySelector('.enterNumsisPerfect');
  let outResult = document.querySelector('.outResultNumsisPerfect');
  let getResult = document.querySelector('.getResultNumsisPerfect');
  getResult.addEventListener('click', () => {
    let num1 = enterNum.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      outResult.innerHTML = 'Невозможно вывести результат проверки.'
    }else{
      let result = (isPerfect(num1))? 'совершенное': 'несовершенное';
      outResult.innerHTML = `Введенное число ${num1} - ${result}`;
    }
  });
}
outResultNumIsPerfect();
function isPerfect(num){
  return num == getDivisors(num).reduce((sum, elem) => +sum + +elem, 0);
}
function getDivisors(num){
  let arr = [];
  for (let i = 1; i < num; i++){
    if (num % i == 0) arr.push(i);
  }
  return arr;
}
//------------------------------------------------
// вывод совершенны чисел в заданном диапазоне

function outPerfectNumsInRange(){
  let leftNum = document.querySelector('.enterStartRange');
  let rightNum = document.querySelector('.enterEndRange');
  let outNums = document.querySelector('.outResultPerfectNums');
  let getIsPerfectNums = document.querySelector('.getRange');
  getIsPerfectNums.addEventListener('click', () => {
    let num1 = leftNum.value.trim();
    let num2 = rightNum.value.trim();
    if(!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
      outNums.innerHTML = 'Не выполнено условие ввода данных.';
    }else{
      let arrOfPerfectNums = [];
      for (let i = num1; i <= num2; i++){
        if(isPerfect(i)) arrOfPerfectNums.push(i);
      }
      outNums.innerHTML = `В диапазоне от ${num1} до ${num2} совершенные числа: ${arrOfPerfectNums.join(', ')}`;
    }
  });
}
outPerfectNumsInRange();
//------------------------------------------------
// вывод времени из введенных данных

function outDateOfNums(){
  let enterNums = document.querySelector('.enterNumsForDate');
  let outDate = document.querySelector('.outDate');
  let pushNumsForDate = document.querySelector('.getDate');

  pushNumsForDate.addEventListener('click', () => {
    let arrNumsForDate = enterNums.value.trim().split(',').map(elem => Number(elem))
    if (arrNumsForDate.length > 3 || arrNumsForDate.length < 1 || arrNumsForDate == '' || arrNumsForDate == null || arrNumsForDate == undefined){
      outDate.innerHTML = 'Не выполнено условие ввода данных.';
    }else{
      outDate.innerHTML = `${getDateOfNums(...arrNumsForDate)}`;
    }
  });
}
outDateOfNums();

function getDateOfNums(hours, minutes = 0, seconds = 0){
  //при заданных аргументах
  //return `${addZero(arguments[0])}:${addZero(arguments[1])}:${addZero(arguments[2])}`;
  return `Введенное время - это ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}
function addZero(num){
  return (num <= 9)? num = '0' + num: num;
}
//------------------------------------------------

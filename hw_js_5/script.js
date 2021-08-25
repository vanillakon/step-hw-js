//---------------------------------------------------
function sumNumsInRange(){
  let enterNum1 = document.querySelector('.startRangeNum');
  let enterNum2 = document.querySelector('.endRangeNum');
  let out = document.querySelector('.outSumNumsInRange');
  let btn = document.querySelector('.pushNumsInRange');
  btn.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    let num2 = enterNum2.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
      out.innerHTML = 'Невозможно посчитать сумму.';
    }else{
      let sum = 0;
      for (let i = num1; i <= num2; i++){
        sum += +i;
      }
      out.innerHTML = `Сумма чисел в заданом диапазоне равна: ${sum}`;
    }
  });
}
sumNumsInRange();
//--------------------------------------------------
//решение с помощью вспомогательных функций
function getGreatestCommonDivisor(){
  let enterNum1 = document.querySelector('.startRangeNumForDivisor');
  let enterNum2 = document.querySelector('.endRangeNumForDivisor');
  let out = document.querySelector('.outNumsInRangeForDivisor');
  let btn = document.querySelector('.pushNumsInRangeForDivisor');
  btn.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    let num2 = enterNum2.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
      out.innerHTML = 'Невозможно найти наибольший общий делитель.';
    }else{
      let arr = getInt(getDivisors(num1), getDivisors(num2));
      out.innerHTML = `Наибольший общий делитель равен ${arr[arr.length - 1]}`;
    }
  });
}
getGreatestCommonDivisor();
function getInt(arr1, arr2){
  let arr = [];
  for (let elem of arr1){
    if (inArray(elem, arr2)) arr.push(elem);
  }
  return arr;
}
function inArray(num, arr){
  return arr.indexOf(num) != -1;
}
function getDivisors(num){
  let arr = [];
  for (let i = 1; i <= num; i++){
    if (num % i == 0) arr.push(i);
  }
  return arr;
}
//------------------------------------------------
function getDivisorOfNum(){
  let enterNum1 = document.querySelector('.numForDivisor');
  let out = document.querySelector('.outNumForDivisor');
  let btn = document.querySelector('.pushNumForDivisor');
  btn.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      out.innerHTML = 'Невозможно найти делители числа.';
    }else{
      let arr = getDivisors(num1);
      out.innerHTML = `Делители числа ${num1}: ${arr.join(', ')}`;
    }
  });
}
getDivisorOfNum();
//------------------------------------------------
function getQuantityDigitsInNum(){
  let enterNum1 = document.querySelector('.enterQuantityDigitsInNum');
  let out = document.querySelector('.outQuantityDigitsInNum');
  let btn = document.querySelector('.pushQuantityDigitsInNum');
  btn.addEventListener('click', () => {
    let num1 = enterNum1.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      out.innerHTML = 'Введено не число.';
    }else{
      out.innerHTML = `В введенном числе ${num1} цифр: ${num1.split('').length}`;
    }
  })
}
getQuantityDigitsInNum();
//-------------------------------------------------
function getStatisticsOfNum(){
  let enterNum1 = document.querySelector('.enterNums');
  let out = document.querySelector('.outStatisticsOfNums');
  let btn = document.querySelector('.pushNums');
  btn.addEventListener('click', () => {
    let arr = enterNum1.value.trim().split(',');
    if (arr == null || arr == '' || arr == undefined || typeof arr !== 'object'){
      out.innerHTML = 'Невозможно вывести статистику по числам.';
    }else if (arr.length < enterNum1.dataset.value){
      out.innerHTML = 'Вы ввели меньше 10 чисел.';
    }else if (arr.length > enterNum1.dataset.value){
      out.innerHTML = 'Вы ввели больше 10 чисел.';
    }else{
      let evenArr = [];
      let notEvenArr = [];
      let positiveNum = [];
      let notPositiveNum = [];
      let numIsZero = 0;
      for (let elem of arr){
        if (isEven(elem)){
          evenArr.push(elem);
        }else{
          notEvenArr.push(elem);
        }
        if (isPositiveNum(elem)){
          positiveNum.push(elem);
        }else{
          notPositiveNum.push(elem);
        }
        if (elem == 0) numIsZero++;
      }
      out.innerHTML = `В введенном вами ряде из ${enterNum1.dataset.value} чисел: положительных - ${positiveNum.length - numIsZero}, отрицательных - ${notPositiveNum.length}, нулей - ${numIsZero}, четных - ${evenArr.length}, нечетных - ${notEvenArr.length}`;
    }
  })
}
getStatisticsOfNum();
function isEven(num){
  return (num %2 == 0)? true : false;
}
function isPositiveNum(num){
  return (num >= 0)? true : false;
}
//------------------------------------------------------
function calculate(){
  let num1, num2, action, result;
  do{
    num1 = parseInt(prompt('Введите первое число:', 0));
    num2 = parseInt(prompt('Введите второе число:', 0));
    action = prompt('Введите действие над числами:', '');
    switch (action) {
      case '/':
      result = num1 / num2;
      break;
      case '*':
      result = num1 * num2;
      break;
      case '+':
      result = num1 + num2;
      break;
      case '-':
      result = num1 - num2;
      break;
    }
    alert(result);
  } while (confirm('Хотите еще раз произвести действия?', ''))
}
calculate();
//------------------------------------------------------
function moveNum(){
  let enterNum1 = document.querySelector('.enterStartNum');
  let enterNum2 = document.querySelector('.enterNumToMove');
  let out = document.querySelector('.outResultMoveNum');
  let btn = document.querySelector('.pushResultMoveNum');
  btn.addEventListener('click', () => {
    let num1 = enterNum1.value.trim().split('');
    let num2 = enterNum2.value.trim();
    if (num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined || num2 > num1.length){
      out.innerHTML = 'Невозможно сдвинуть число.';
    }else{
      num1.push(...num1.splice(0, num2));
      out.innerHTML = num1.join('');
    }
  });
}
moveNum();
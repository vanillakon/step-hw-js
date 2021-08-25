//----------------------------------------------------------------
//функция возводит число в степень
function outNumInPow(){
  let btn = document.querySelector('.getPowResult');
  let outResult = document.querySelector('.outPowResult');
btn.addEventListener('click', () =>{
  let num1 = document.querySelector('.enterNum').value.trim();
  let num2 = document.querySelector('.enterPow').value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
      outResult.innerHTML = 'Невозможно возвести число в степень.'
    }else{
      outResult.innerHTML = `Число ${num1} в степени ${num2} равно: ${getPowNum(num1, num2)}`;
    }
  });
}
outNumInPow();
function getPowNum(num, pow){
  return (pow == 1)? num: num * getPowNum(num, pow - 1);
}
//console.log(getPowNum(2, 5));
//----------------------------------------------------------------
// функция нахождения НОД
function outGreatestCommonDivisor(){
let btn = document.querySelector('.getGreatestCommonDivisor');
let out = document.querySelector('.outGreatestCommonDivisor');
btn.addEventListener('click', () => {
  let num1 = document.querySelector('.enterNumForGreatestCommonDivisor').value.trim();
  let num2 = document.querySelector('.enterNumForGreatestCommonDivisor2').value.trim();
  if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined || !isFinite(num2) || num2 == null || num2 == '' || num2 == undefined){
    out.innerHTML = 'Невозможно возвести число в степень.'
  }else{
    out.innerHTML = `НОД числа ${num1} равен: ${greatestCommonDivisor(num1, num2)}`;
  }
});
}
outGreatestCommonDivisor();
function greatestCommonDivisor(num1, num2){
  if(num2 > num1) return greatestCommonDivisor(num2, num1);
  if (!num2) return num1;
  return greatestCommonDivisor(num2, num1 % num2);
}
//console.log(greatestCommonDivisor(25, 125));
//----------------------------------------------------------------
//максимальная цифра в числе
function outMaxDigitInNum(){
let btn = document.querySelector('.getOutMaxDigit');
let out = document.querySelector('.outMaxDigit');
btn.addEventListener('click', () => {
let num1 = document.querySelector('.enterNumForMaxDigit').value.trim();
  if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      out.innerHTML = 'Невозможно вывести максимальную цифру.';
    }else{
      num1 = String(num1).split('');
      let i = 1;
      let max = num1[0];
      out.innerHTML = `Максимальная цифра в числе ${num1.join('')}: ${searchMaxDigitInNum(num1, max, i)}`;
  }

});
}
outMaxDigitInNum();

function searchMaxDigitInNum(num, max, i){
while(i != num.length){
  i++;
  if (max < num[i]){
    max = num[i];
  }else{
    max = max;
  }
  searchMaxDigitInNum(num, max, i);
}
return max;
}
//console.log(searchMaxDigitInNum(num, max));
//----------------------------------------------------------------
//проверка числа на простоту
function outIsSimpleNum(){
let btn = document.querySelector('.getOutSimple');
let out = document.querySelector('.outResultSimple');
btn.addEventListener('click', () => {
  let num1 = document.querySelector('.enterNumForSimple').value.trim();
  let i = 2;
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      out.innerHTML = 'Невозможно вывести результат проверки.'
      }else{
      out.innerHTML = `Результат проверки числа ${num1}: ${isSimple(num1, i)}`;
    }
});
}
outIsSimpleNum();

function isSimple(num, i){
if (num < i){
  return false;
}else if(num == i){
  return true;
}else if (num % i == 0){
  return false;
}else if(i < num / i){
  i++;
  return isSimple(num, i);
}else{
  return true;
}
 //   if (num % i != 0){
 //     i++;
 //     isSimple(num);
 //   }else{
 //     return true;
 //   }
 // return false;
 }
//console.log(isSimple(num));

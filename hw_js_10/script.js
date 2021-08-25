//-----------------------------------------------------------------------------
//функция выводит множители заданного числа в порядке возрастания
function outFactorNum(){
  let btn = document.querySelector('.getFactorNumber');
  let out = document.querySelector('.outFactorNumber');
  let enterNum = document.querySelector('.enterNumForFactorNum');
  btn.addEventListener('click', () => {
    let num = enterNum.value.trim();
    if (!isFinite(num) || num == null || num == '' || num == undefined){
          out.innerHTML = 'Невозможно вывести множители числа.';
    }else{
      let arr = [];
      let i = 2;
        out.innerHTML = `Множители числа ${num} = ${toFactorNumber(num, i, arr).join(' * ')}`;
      }
  });
}
outFactorNum();

function toFactorNumber(num, i, arr){
if (num > 1){
if (num % i == 0){
  arr.push(i);
  toFactorNumber(num / i, i, arr);
}else{
  toFactorNumber(num, ++i, arr);
}
}
return arr;
}
//-----------------------------------------------------------------------------
//выводит число из ряда Фибоначчи согласно заданного номера
function outNumInArr(){
  let btn = document.querySelector('.getNumInArr');
  let out = document.querySelector('.outNumInArr');
  let enterNum = document.querySelector('.enterNumForGetNumInArr');
  btn.addEventListener('click', () => {
    let num = enterNum.value.trim();
    if (!isFinite(num) || num == null || num == '' || num == undefined){
          out.innerHTML = 'Невозможно вывести число.';
    }else{
        out.innerHTML = `Число под номером ${num} в ряду Фибоначчи: ${fibonacci([1,1], num * 2)[num - 1]}`;
      }
  });
}
outNumInArr();

function fibonacci(signature,n){
  if(n >= 0 && n < 2){
    return signature.splice(0, n);
  }else{
    if (n > 2){
    let sum = signature.slice(-2).reduce((sum, elem) => sum + elem, 0);
    signature.push(sum);
    n--;
    return fibonacci(signature, n);
  }else{
    return signature;
  }
  }
}

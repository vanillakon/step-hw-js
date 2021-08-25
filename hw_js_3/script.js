function whoIsHuman(){
  let enterAreaOfAge = document.querySelector('.enterAge');
  let btn = document.querySelector('.pushValue');
  btn.addEventListener('click', () => {
    let result = '';
    let age = +enterAreaOfAge.value;
    if (!isFinite(age)){
      result = 'Вы ввели не число!';
    }else{
      if (age >= 0 && age <= 2){
        result = 'Ребёнок.';
      }
      if (age >= 12 && age < 18){
        result = 'Подросток.';
      }
      if (age >= 18 && age < 60){
        result = 'Зрелый.';
      }
      if (age >= 60){
        result = 'Пенсионер.';
      }else{
        result = 'Не известно кто ты!';
      }
    }
    enterAreaOfAge.value = '';
    document.querySelector('.outResult').innerHTML = result;
  });
}
//whoIsHuman();
function whoIsHuman2(){
  let enterAreaOfAge = document.querySelector('.enterAge');
  let btn = document.querySelector('.pushValue');
  let out = document.querySelector('.outResult');
  btn.addEventListener('click', () => {
    let age = enterAreaOfAge.value.trim();
    console.log(age);
    let result = (!isFinite(age) || age == null || age == 'undefined' || age === '')? 'Вы ввели не число!': (age >= 0 && age <= 2)? 'Ребёнок.': (age >= 12 && age < 18)? 'Подросток.': (age >= 18 && age < 60)? 'Зрелый.': (age >= 60)? 'Пенсионер.': (age > 120)? 'Труп или крайне редкий случай!' :'Неизвестно кто ты!';
    enterAreaOfAge.value = '';
    out.innerHTML = result;
  });
}
whoIsHuman2();

//2
function isSymbolOfKeyNumber(){
  let enterAreaOfNumber = document.querySelector('.enterNumber');
  let btn = document.querySelector('.pushValueNumber');
  let out = document.querySelector('.outSymbol');
  btn.addEventListener('click', () => {
    let result = '';
    let num = parseInt(enterAreaOfNumber.value);
      switch (num) {
      case 0:
        result = ')';
        break;
      case 1:
        result = '!';
        break;
      case 2:
        result = '@';
        break;
      case 3:
        result = '#';
        break;
      case 4:
        result = '$';
        break;
      case 5:
        result = '%';
        break;
      case 6:
        result = '^';
        break;
      case 7:
        result = '&';
        break;
      case 8:
        result = '*';
        break;
      case 9:
        result = '(';
        break;
      default:
        result = 'Вы ввели число вне диапазона, сэр!!!';
    }
    enterAreaOfNumber.value = '';
    out.innerHTML = result;
  });
}
isSymbolOfKeyNumber();

function checkInArraySameDigits(){
  let enterAreaOfNumber = document.querySelector('.enterDigit');
  let btn = document.querySelector('.pushNumberForCheck');
  let out = document.querySelector('.outResultSameDigits');
  btn.addEventListener('click', () => {
    let result = '';
    if (enterAreaOfNumber.value.length > enterAreaOfNumber.dataset.value){
      result = 'Вы ввели значение больше 3 символов.';
    }else if(enterAreaOfNumber.value.length < enterAreaOfNumber.dataset.value){
      result = 'Вы ввели значение меньше 3 символов.';
    }else{
      let arrOfDigits = enterAreaOfNumber.value.split('').map(elem => Number(elem)); // в принципе можно не перебирать мэпом
      let cutSameDigits = new Set(arrOfDigits);
      console.log(arrOfDigits, cutSameDigits);
      result = (arrOfDigits.length == cutSameDigits.size)? 'Нет одинаковых цифр.': 'Есть одинаковые цифры.';
    }
    out.innerHTML = result;
    enterAreaOfNumber.value = '';
  });
}
checkInArraySameDigits();


function isLeapYear(){
  let enterYear = document.querySelector('.enterYear');
  let btn = document.querySelector('.pushYear');
  let outInfo = document.querySelector('.outYear');
  btn.addEventListener('click', () =>{
    let year = +enterYear.value;
    let result = '';
    if(!isFinite(year) || year == '' || year == null || year == 'undefined'){
      outInfo.innerHTML = 'Был введен явно не год!!!';
    }else{
      outInfo.innerHTML = (new Date(year, 2, 0).getDate() == 29)? result = `Введенный Вами год ${year} - ВИСОКОСНЫЙ!`: result = `Введенный Вами год ${year} - НЕ ВИСОКОСНЫЙ!`;
      enterYear.value = '';
    }
  });
}
isLeapYear();

function isNumberPalindrom(){
  let enterAreaOfNumber = document.querySelector('.enterCheckNumber');
  let btn = document.querySelector('.pushNumberForCheckOfPalindrom');
  let out = document.querySelector('.outResultPalindrom');
  btn.addEventListener('click', () =>{
    let result = '';
    let num = enterAreaOfNumber.value.trim();
    if (!isFinite(num) || num == '' || num == null || num == 'undefined'){
        result = `Введенное вами ${num} не является числом!`;
    }else{
      if (num.length > enterAreaOfNumber.dataset.value){
        result = 'Вы ввели значение больше 5 символов.';
      }else if(num.length < enterAreaOfNumber.dataset.value){
        result = 'Вы ввели значение меньше 5 символов.';
      }else{
        let palindrom = Number(String(num).split('').reverse().join(''));
        result = (num == palindrom)? `Число ${num} является палиндромом.`: `Число ${num} не является палиндромом.`;
      }
    }
    out.innerHTML = result;
    enterAreaOfNumber.value = '';
  });
}
isNumberPalindrom();

function changeCurrency(){
  let fisrtSelectOfCash = document.querySelector('.firstSelectOfCash');
  let secondSelectOfCash = document.querySelector('.secondSelectOfCash');
  let btn = document.querySelector('.pushCashToChange');
  let out = document.querySelector('.outResultChangeCash');
  let enterValueToChange = document.querySelector('.enterValueToChange');
  btn.addEventListener('click', () =>{
    let cashValue = enterValueToChange.value;
    let result = '';
    if (!isFinite(cashValue) || cashValue == '' || cashValue == null || cashValue == 'undefined'){
        result = `Введенное вами ${cashValue} не является числом!`;
    }else{
    for (let optionF of fisrtSelectOfCash){
      if (optionF.selected){
        for (let optionS of secondSelectOfCash){
          if (optionS.selected){
            result = ((cashValue / optionF.dataset.value) * optionS.dataset.value).toFixed(3);
          }
        }
      }
    }
  }
    out.innerHTML = result;
  });
}
changeCurrency();

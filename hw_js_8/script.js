//------------------------------------------------
// функция выводит время в секундах
function outSeconds(){
  let enterNums = document.querySelector('.enterNumsForSeconds');
  let outDate = document.querySelector('.outSeconds');
  let pushNumsForDate = document.querySelector('.getSeconds');

  pushNumsForDate.addEventListener('click', () => {
    let arrNumsForDate = enterNums.value.trim().split(',').map(elem => Number(elem));
    if (arrNumsForDate.length > 3 || arrNumsForDate.length < 1 || arrNumsForDate == '' || arrNumsForDate == null || arrNumsForDate == undefined){
      outDate.innerHTML = 'Не выполнено условие ввода данных.';
    }else{
      outDate.innerHTML = `Введенное время составляет: ${getSeconds(...arrNumsForDate)} секунд.`;
    }
  });
}
outSeconds();
function getSeconds(hours, minutes = 0, seconds = 0){
  return (!isFinite(hours) || !isFinite(minutes) || !isFinite(seconds))? 'Не выполнено условие ввода данных.': hours * 3600 + minutes * 60 + seconds;
}
//------------------------------------------------
//функция принимает секунды и выводит их в часы,минуты,секунды
function outTimeOfSeconds(){
  let enterSeconds = document.querySelector('.enterSecondsForTime');
  let outTime = document.querySelector('.outTime');
  let getSeconds = document.querySelector('.getSecondsForTime');
  getSeconds.addEventListener('click', () => {
    let num1 = enterSeconds.value.trim();
    if (!isFinite(num1) || num1 == null || num1 == '' || num1 == undefined){
      outTime.innerHTML = 'Невозможно вывести время.';
    }else{
      outTime.innerHTML = `Из введенных секунд время составляет: ${getTimeOfSeconds(num1)}`;
    }
  });
}
outTimeOfSeconds();

function getTimeOfSeconds(num){
  let hours = Math.floor(num / 3600);
  let minutes = Math.floor(num / 60) - (hours * 60);
  let seconds =  num % 60;
  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}
function addZero(num){
  return (num <= 9)? num = '0' + num: num;
}
//------------------------------------------------
//функция считает разницу между датами
function outDifferenceOfDates(){
let enterDates = document.querySelector('.enterDatesForDifference');
let outDifference = document.querySelector('.outDifference');
let getDates = document.querySelector('.getDatesForDifference');
getDates.addEventListener('click', () => {
  let arrDates = enterDates.value.trim().split(',').map(elem => Number(elem));
  if (arrDates.length != 6  || arrDates == '' || arrDates == null || arrDates == undefined){
    outDifference.innerHTML = 'Не выполнено условие ввода данных.';
  }else{
    // arrDates[1] -= 1;
    // arrDates[4] -= 1;
    // let date1 = new Date(...arrDates.splice(0, 3));
    // let date2 = new Date(...arrDates);
    // let resultOfDifference = date1 - date2;
    // outDifference.innerHTML = date1;
    //outDifference.innerHTML = `Разница между введенных дат составляет: ${getTimeOfSeconds(Math.abs(resultOfDifference / 1000))}`;
    //с помощью функции
    outDifference.innerHTML = `Разница между введенных дат составляет: ${getDifferenceDates(...arrDates)}`;
  }
});
}
outDifferenceOfDates();

//или согласно условия задания (почти)
function getDifferenceDates(year, month, day, year2, month2, day2){
let date1 = new Date(year, month - 1, day);
let date2 = new Date(year2, month2 - 1, day2);
return getTimeOfSeconds(Math.abs((date1 - date2) / 1000));
}
//------------------------------------------------

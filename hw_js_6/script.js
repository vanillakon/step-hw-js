//------------------------------------------------
//вывод текущей даты + запрос на показ следующего дня
function showDay(){
let now = new Date();
let date;
let i = 0;
let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
 do{
   date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
   i++;
 }while(confirm(`День недели: ${daysOfWeek[date.getDay()]} - ${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${addZero(date.getFullYear())}, Вы хотите увидеть следующий день ?`, ''))
}
function addZero(num){
  return (num <= 9)? num = '0' + num: num;
}
//------------------------------------------------
//вывод таблицы умножения
function createTable(num1, num2){
let table = document.createElement('TABLE');
let titleTable = document.createElement('TR');
let tableTitleArr = ['-'];
for (let arrNum = num1; arrNum <= num2; arrNum++){
  tableTitleArr.push(arrNum);
}
tableTitleArr.forEach((elem) => {
  let th = document.createElement('TH');
  th.innerHTML = elem;
  titleTable.appendChild(th);
});
table.appendChild(titleTable);
for (let i = 1; i <= 10; i++){
  let tr = document.createElement('TR');
  let mainTD = document.createElement('TD');
  mainTD.innerHTML = i;
  tr.appendChild(mainTD);
  for (let j = num1; j <= num2; j++){
    let td = document.createElement('TD');
    td.innerHTML = j * i;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
return table;
}
document.querySelector('.forTable').appendChild(createTable(2, 9));
//------------------------------------------------
//"Угадай число" - деление диапазона чисел
function outGuessNum(){
  let mid = 0;
  let num = +prompt('Введите число от 0 до 100:', 0);
    if (num == null || num == undefined || num == '' || !isFinite(num)){
      alert(`Было введено не число. До Свидания!`);
    }else{
      guessNum(generateArrNums());
    }
}
function guessNum(arr){
  mid = Math.floor(arr.length / 2);
  if (confirm(`Загаданное число: ${arr[mid]} ?`)){
    alert('Ура! Я смог угадать заданное число.');
    if(confirm('Попробовать еще ?')) {
      outGuessNum();
    }
  }else{
    if(confirm(`Загаданное число больше ${arr[mid]} ?`)){
      guessNum(arr.slice(mid));
    }else{
      guessNum(arr.slice(0, mid));
    }
  }
}
function generateArrNums(){
  let arrRange = [];
  for (let i = 0; i <= 100; i++){
    arrRange.push(i);
  }
  return arrRange;
}
//------------------------------------------------

let startFuncShowDay = document.querySelector('.startFuncShowDay');
startFuncShowDay.addEventListener('click', () => {
  showDay()
});

let startFuncoutGuessNum = document.querySelector('.startFuncoutGuessNum');
startFuncoutGuessNum.addEventListener('click', () => {
  outGuessNum();
});
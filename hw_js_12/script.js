//------------------------------------------------------------------------------
// вывод времени и манипуляция с ним

//объект времени
function Time(hours, minutes, seconds){
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

//создание объекта
let now = new Date();
let time = new Time(now.getHours(), now.getMinutes(), now.getSeconds());

let out = document.querySelector('.outTime');
let out2 = document.querySelector('.outTime2');
let inputs = document.querySelectorAll('.parent_time inputs');
let timerId;
function outChangeTime(){
let btn = document.querySelector('.getChangeTime');

//явное указание контекста через call например
out.innerHTML = `Время: ${outTime.call(time)}`;

btn.addEventListener('click', () => {
  let sec = +document.querySelector('.enterSeconds').value.trim();
  let min = +document.querySelector('.enterMinutes').value.trim();
  let hour = +document.querySelector('.enterHours').value.trim();
  if (!isNaN(sec) && !isNaN(min) && !isNaN(hour)){
        changeSeconds.call(time, sec);
        changeMinutes.call(time, min);
        changeHours.call(time, hour);
        out2.innerHTML = `Будет: ${addZero(time.hours)}:${addZero(time.minutes)}:${addZero(time.seconds)}`;
      }else{
        out.innerHTML = `Невозможно вывести новое время.`;
      }
});
}
outChangeTime();

//функция вывода времени
function outTime(){
  return `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
}

//функция изменения времени, путем добавления секунд
function changeSeconds(sec = 0){
  this.seconds += sec;
  if (this.seconds >= 60){
    this.minutes += Math.trunc(this.seconds / 60);
    if (this.minutes >= 60){
      this.hours += Math.trunc(this.minutes / 60);
        if(this.hours >= 24){
          this.hours = 0;
        }
      this.minutes = this.minutes % 60;
    }
    this.seconds = this.seconds % 60;
  }
  return `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
}
//console.log(changeSeconds.call(time, 30));

//функция добавления '0' к числам менее 9
function addZero(num){
  return (num <= 9)? '0' + num: num;
}

//функция изменения времени, путем добавления минут
function changeMinutes(min = 0){
  this.minutes += min;
  if (this.minutes >= 60){
    this.hours += Math.trunc(this.minutes / 60);
        if(this.hours >= 24){
          this.hours = 0;
        }
    this.minutes = this.minutes % 60;
  }
  return `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
}

//функция изменения времени, путем добавления часов
function changeHours(hour = 0){
  this.hours += hour;
  if (this.hours >= 24) this.hours = this.hours % 24;
  return `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`;
}
//------------------------------------------------------------------------------

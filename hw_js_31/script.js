//решение должно быть в разы проще, но при реализации, сталкивался с багами, которые приходилось решать
function accord(){
let parent = document.querySelector('.wrapper ul');
let hiddenLis = document.querySelectorAll('.spyLi');
let lis = document.querySelectorAll('.titleLi');
parent.addEventListener('click', (event) => {
  hiddenLis.forEach(elem => (!elem.classList.contains('hidden')? elem.classList.add('hidden'): false));
  if (event.target.tagName == 'LI') {
    lis.forEach(elem => {
      if(elem !== event.target) elem.classList.remove('active');
    });
    if (event.target.classList.contains('titleLi')){
      event.target.nextElementSibling.classList.remove('hidden');
      if (event.target.classList.contains('active')) event.target.nextElementSibling.classList.add('hidden');
      if (event.target.classList.contains('titleLi')) event.target.classList.toggle('active');
    }
  }
  if(!event.target.tagName == 'LI') return;
});
}
accord();
//ниже второй вариант решения

function accord2(){
let parent = document.querySelector('.wrapper2');
let divs = document.querySelectorAll('.div1');
for (let div of divs){
  div.addEventListener('click', function(){
    let clickable = parent.querySelector('.row.active');
    if (clickable) clickable.classList.remove('active');
    let row = this.closest('.row');
    console.log(row, clickable);
    if(row !== clickable) row.classList.add('active');
  });
}
}
accord2();
//------------------------------------------------------------------------------
function scroll(){
  let arrText = ['1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
  let parent = document.querySelector('.scrollTextParent');
  let i = 0;
  parent.addEventListener('scroll', function addNewSpan(){
    if(i == arrText.length){
      i = 0;
      this.removeEventListener('scroll', addNewSpan);
    }else{
      if((this.scrollHeight - this.scrollTop) == this.clientHeight){
        let newSpan = document.createElement('SPAN');
        newSpan.innerHTML = arrText[i];
        newSpan.setAttribute('class', 'newSpan');
        parent.appendChild(newSpan);
        i++;
      }
    }
  });
}
scroll();
//------------------------------------------------------------------------------
function outCalendar(){
  let inpMonth = document.querySelector('.month');
  let inpYear = document.querySelector('.year');
  let btn = document.querySelector('.btnGenerate');
  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'];
  let outMonth = document.querySelector('.outMonth');
  btn.addEventListener('click', () => {
    body.innerHTML = '';
    let year = inpYear.value.trim();
    let month = inpMonth.value.trim();
    if (year === null || year === 'undefined' || year === '' || isNaN(year) || month === null || month === 'undefined' || month === '' || isNaN(month) || Number(month) < 0 || Number(month) == 0 || month > 12){
      outMonth.innerHTML = 'Невозможно сгенерировать календарь!';
    }else{
      let date = new Date(year, month, 1);
      console.log(date);
      outMonth.innerHTML = `${monthArr[month - 1]}, ${year}`;
      draw(body, date.getFullYear(), date.getMonth());
    }
  });

let body = document.querySelector('.calendar');

function range(count) {
  let arr = [];
	for (let i = 1; i <= count; i++){
    arr.push(i);
  }
  return arr;
}

function getLastDay(year, month){
  let date = new Date(year, month, 0);
  return date.getDate();
}

function getFirstWeekDay(year, month) {
  let date = new Date(year, month - 1, 1);
  let firstDay = date.getDay();
  return firstDay;
}

function getLastWeekDay(year, month) {
  let date = new Date(year, month, 0);
  let lastDay = date.getDay();
  return lastDay;
}

function normalize(arr, left, right) {
  for (let i = 0; i <= right; i++){
    arr.push('');
}
  for (let k = 0; k < left; k++){
    arr.unshift('');
  }
  return arr;
}

function chunk(arr, n) {
  let arr2 = [];
	for (let i = 0; i < arr.length; i++){
    arr2[i] = arr.splice(1, n);
  }
  return arr2;
}

function createTable(parent, arr) {
  let title = document.createElement('tr');
  for (let day of days){
    let th = document.createElement('th');
    th.innerHTML = day;
    title.appendChild(th);
  }
  parent.appendChild(title);
	for (let i = 0; i < arr.length; i++){
    let tr = document.createElement('tr');
    for (let k = 0; k < arr[i].length ; k++){
      let td = document.createElement('td');
      td.innerHTML = arr[i][k];
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
  let filtersNums = [];
  for(let elem of nums) {
    if (!elem.every(item => item === '')) {
      filtersNums.push(elem);
    }
  };
	createTable(body, filtersNums);
}

}
outCalendar();

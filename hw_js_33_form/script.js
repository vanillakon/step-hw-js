// 0 оптимизации (((
//------------------------------------------------------------------------------
function f1(){
let btn = document.querySelector('.changeText');
let textArea = document.querySelector('.formForText textarea');
let outResult = document.querySelector('.resultText');
let checkboxes = document.querySelectorAll('.formForText input');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if(textArea.value.length !== 0){
    //если необходимо убрать стиль
    // checkboxes.forEach(elem => {
    //   if (!elem.checked) outResult.style.removeProperty(elem.dataset.value);
    // });
    checkboxes.forEach(elem => {
      if (elem.checked) outResult.style.cssText += elem.value;
    });
    outResult.closest('.resultWrapper').classList.remove('hidden');
    outResult.innerHTML = textArea.value;
    textArea.parentElement.classList.add('hidden');
  }
});
}
f1();
//------------------------------------------------------------------------------
function selectBook(){
let btns = document.querySelectorAll('.selectBtn');
let titleBook = document.querySelector('#book');
let deliveryDate = document.querySelector('#date');
btns.forEach(btn => btn.addEventListener('click', () => {
    let date = new Date();
    titleBook.value = '';
    deliveryDate.value = '';
    titleBook.value = btn.parentElement.parentElement.querySelector('.bookTitle span').innerHTML;
    deliveryDate.value = new Date(addZero(date.getFullYear()), addZero(date.getMonth()), date.getDate() + 2).toLocaleDateString();
    titleBook.disabled = true;
  })
);
}
selectBook();

function checkForm(){
let [book, quantity, name, address, date, comment] = [document.querySelector('#book').value, document.querySelector('#quantity'), document.querySelector('#name'), document.querySelector('#address'), document.querySelector('#date'), document.querySelector('#comment').value];
if(!/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name.value)){
  name.classList.add('colored');
  return false;
}
if(/^[a-zA-Z]+$/.test(quantity.value)) {
  quantity.classList.add('colored');
  return false;
}
if(!/^\d{2}\.\d{2}\.\d{4}$/.test(date.value)){
  date.classList.add('colored');
  return false;
}
if(!/^[A-Z][a-z]*\s([A-Z][a-z]*)?(\s)?\d+$/.test(address.value)){
  address.classList.add('colored');
  return false;
}
return true;
}

function outInfo(){
  let form = document.querySelector('.buyingForm');
  let outInfo = document.querySelector('.infoAboutOrder');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkForm()){
      form.querySelectorAll('.colored').forEach(elem => elem.classList.remove('colored'));
      let [book, name, address, date] = [document.querySelector('#book'), document.querySelector('#name').value, document.querySelector('#address').value, document.querySelector('#date').value];
      outInfo.classList.remove('hidden');
      outInfo.querySelector('.infoAbout').innerHTML = `${name}, thanks for the order! <br/><br/> Book ${book.value} will be delivered on ${date} to ${address}`;
      form.querySelectorAll('.sendInfo').forEach(elem => elem.value = '');
      book.disabled = false;
    }
  })
  form.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
      e.preventDefault();
      return false;
    }
  })
}
outInfo();
function addZero(num){
  return (num >= 0 && num <= 9)? '0' + num: num;
}
function clearForm(){
let fields = document.querySelectorAll('.sendInfo');
document.addEventListener('DOMContentLoaded', () => {
  fields.forEach(elem => elem.value = '');
  });
}
clearForm();
//------------------------------------------------------------------------------
function selectGroup(){
let students = {
  group1: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'],
  group2: ['Student 1', 'Student 2', 'Student 3'],
  group3: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6', 'Student 7'],
}
let btn = document.querySelector('.selectGroupAndLesson');
let groups = document.querySelectorAll('.selectGroup option');
let lessons = document.querySelectorAll('.selectLesson option');
let studentsWrapper = document.querySelector('.studentsWrapper');
btn.addEventListener('click', () => {
  let group, lesson = '';
  groups.forEach(elem => {
    if(elem.selected) group = elem.value;
  });
  lessons.forEach(elem => {
    if(elem.selected) lesson = elem.value;
  });
  let key = '' + group + lesson;
  if(localStorage.getItem(key) !== null){
    studentsWrapper.innerHTML = '';
    let obj = JSON.parse(localStorage.getItem(key));
    let titlelesson = document.createElement('p');
    titlelesson.innerHTML = obj.topic;
    studentsWrapper.appendChild(titlelesson);
    createTable(obj, group, lesson, studentsWrapper);
  }else{
    studentsWrapper.innerHTML = '';
    let label = document.createElement('label');
    label.innerHTML = 'Topic:';
    studentsWrapper.appendChild(label);
    let inp = document.createElement('input');
    inp.classList.add('topicLesson');
    studentsWrapper.appendChild(inp);
    createTable(students, group, lesson, studentsWrapper);
    let btn2 = document.createElement('button');
    btn2.innerHTML = 'Save';
    btn2.classList.add('btnSave');
    btn2.addEventListener('click', () => {
      if(inp.value.length >= 10) saveStudentsOnLesson(group, lesson);
      studentsWrapper.classList.add('hidden');
    });
    studentsWrapper.appendChild(btn2);
   }
   studentsWrapper.classList.remove('hidden');
});
}
selectGroup();

function createTable(obj, group, less, parent){
  let table = document.createElement('table');
  let titleTr = document.createElement('tr');
  let titleArr = ['Name', 'Is Present'];
  for (let i = 0; i < titleArr.length; i++){
    let th = document.createElement('th');
    th.innerHTML = titleArr[i];
    titleTr.appendChild(th);
  }
  table.appendChild(titleTr);
  for (let key in obj){
    if (key == group){
      if(Array.isArray(obj[key])){
        for (let i = 0; i < obj[key].length; i++){
          let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = obj[key][i];
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            td2.innerHTML = '<input type="checkbox">';
            tr.appendChild(td2);
          table.appendChild(tr);
        }
      }else{
        for (let student in obj[key]){
          let tr = document.createElement('tr');
            let td3 = document.createElement('td');
            td3.innerHTML = student;
            tr.appendChild(td3);
            let td4 = document.createElement('td');
            td4.innerHTML = obj[key][student];
            tr.appendChild(td4);
          table.appendChild(tr);
        }
      }
    }
  }
  parent.appendChild(table);
}

function saveStudentsOnLesson(group, lesson){
  let topic = document.querySelector('.topicLesson');
  let checkboxes = document.querySelectorAll('.studentsWrapper input[type="checkbox"]');
  for (let elem of Array.from(checkboxes)){
    elem.parentElement.innerHTML = (elem.checked)? 'present': ' ';
    }
  let keyObj = '' + group + lesson;
  let obj = {
  [keyObj]: {},
  }
  let trs = document.querySelectorAll('.studentsWrapper tr');
  for (let i = 1; i < trs.length; i++){
    let tds = trs[i].querySelectorAll('td');
    obj[keyObj][tds[0].innerHTML] = tds[1].innerHTML;
  }
  let objWithTopic = {
    topic: topic.value,
    [group]: obj[keyObj],
  }
  localStorage.setItem(keyObj, JSON.stringify(objWithTopic));
}
//------------------------------------------------------------------------------
function searchTickets(){
let btnSearch = document.querySelector('.searchTickets');
let parent = document.querySelector('.carriageWrapper');
let date = document.querySelector('#dateTour');
let footerTickets = document.querySelector('.buingTicketsWrapper');
let btnBooking = document.querySelector('.bookingTickets');
let direct = document.querySelector('#selectDirection');
let outMyTickets = document.querySelector('.outMyTickets');
date.valueAsDate = new Date();
let now = new Date();
date.setAttribute('min', new Date().toLocaleDateString().split('.').reverse().join('-'));
date.setAttribute('max', new Date(now.getFullYear(), now.getMonth() + 2, 0).toLocaleDateString().split('.').reverse().join('-'));
btnSearch.addEventListener('click', () => {
  parent.innerHTML = '';
  let keyStorage = direct.value + date.value;
  if(localStorage.getItem(keyStorage) !== null){
    outTrainCarriage(parent);
    let obj = JSON.parse(localStorage.getItem(keyStorage));
    if(obj['seat'].length < 28) footerTickets.classList.remove('hidden');
    let checkboxes = parent.querySelectorAll('input[type="checkbox"]');
    for (let soldTicket of obj['seat']){
        for (let elem of Array.from(checkboxes)){
          if(elem.value == soldTicket) {
            elem.disabled = true;
            elem.checked = true;
          }
        }
    }
   }else{
    outTrainCarriage(parent);
    footerTickets.classList.remove('hidden');
   }
   btnBooking.addEventListener('click', () => {
     let seats = document.querySelectorAll('.carriageWrapper input[type="checkbox"]');
     let keyStorage = direct.value + date.value;
     let seatsNotFree = [];
     let buyNow = [];
     seats.forEach(elem => {
        if (elem.checked && !elem.disabled) buyNow.push(elem.value);
     });
     if(localStorage.getItem(keyStorage) !== null){
       let obj = JSON.parse(localStorage.getItem(keyStorage));
       seatsNotFree = obj['seat'];
       buyNow.forEach(item => seatsNotFree.push(item));
       console.log(seatsNotFree);
     }else{
       seatsNotFree = buyNow;
       console.log(seatsNotFree);
     }
     footerTickets.classList.add('hidden');
     parent.classList.add('hidden');
     let infoAboutTickets = {
       direction: direct.value,
       date: date.value,
       seat: seatsNotFree,
       buing: buyNow,
     }
    localStorage.setItem(direct.value + date.value, JSON.stringify(infoAboutTickets));
    outMyTickets.classList.remove('hidden');
    myTickets(infoAboutTickets, outMyTickets);
   });
});
}
searchTickets();

function outTrainCarriage(parent){
  let carriage = document.createElement('div');
  let price = document.querySelector('.totalPrice');
  carriage.classList.add('carriage');
  let num = 1;
  parent.appendChild(carriage);
  for (let i = 0; i < 7; i++){
    let table = document.createElement('table');
    for (let k = 0; k < 2; k++){
      let tr = document.createElement('tr');
        for(let j = 0; j < 2; j++){
          let td = document.createElement('td');
          td.innerHTML = '<input type="checkbox">' + num;
          tr.appendChild(td);
          num++;
        }
      table.appendChild(tr);
    }
    carriage.appendChild(table);
  }
  num = 1;
  let checkboxes = carriage.querySelectorAll('input[type="checkbox"]');
  for (let check of checkboxes){
    check.value = num;
    (num % 2 == 0)? check.setAttribute('data-price', 100): check.setAttribute('data-price', 75);
    num++;
    check.addEventListener('change', () => {
      if(check.checked){
        price.innerHTML = +price.innerHTML + +check.dataset.price;
      }else{
        price.innerHTML = +price.innerHTML - +check.dataset.price;
      }
    })
  }
}

function myTickets(obj, parent){
  let table = document.createElement('table');
  let titleTr = document.createElement('tr');
  for(let i = 0; i < Object.values(obj).length - 1; i++){
    let th = document.createElement('th');
    str = Object.keys(obj)[i][0].toUpperCase() + Object.keys(obj)[i].slice(1);
    th.innerHTML = str;
    titleTr.appendChild(th);
  }
  table.appendChild(titleTr);
  for (let ticketsNum of obj['buing']){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let directionMod = obj['direction'].split('-').map(item => {
      item = item[0].toUpperCase() + item.slice(1);
      return item;
    }).join('-');
    td1.innerHTML = directionMod;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    let dateMod = obj['date'].split('-').reverse().join('.');
    td2.innerHTML = dateMod;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = ticketsNum;
    tr.appendChild(td3);

    table.appendChild(tr);
  }
  parent.appendChild(table);
}

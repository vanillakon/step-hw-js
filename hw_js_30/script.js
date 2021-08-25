//------------------------------------------------------------------------------
function createTable(parent, arr){
  let titleTr = document.createElement('TR');
  for (let key of Object.keys(arr[0])){
    let th = document.createElement('TH');
    th.innerHTML = key;
    titleTr.appendChild(th);
  }
  parent.appendChild(titleTr);
  for (let elem of arr){
    let tr = document.createElement('TR');
    for (let item of Object.values(elem)){
      let td = document.createElement('TD');
      td.innerHTML = item;
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}
function sortTable(){
  let table = document.querySelector('.table');
  let users = [
    {Firstname: 'Timothy', Lastname: 'Cook', Age: 57, Company: 'Apple'},
    {Firstname: 'Mark', Lastname: 'Zuckerberg', Age: 34, Company: 'Facebook'},
    {Firstname: 'Bill', Lastname: 'Gates', Age: 62, Company: 'Microsoft'},
    {Firstname: 'Larry', Lastname: 'Page', Age: 45, Company: 'Google'},
  ];
  createTable(table, users);
  table.addEventListener('click', function(e){
    if (e.target.tagName == 'TH'){
      table.innerHTML = '';
      users.sort((a, b) => a[e.target.innerHTML] > b[e.target.innerHTML]? 1: -1);
      createTable(table, users);
    }
  })
}
sortTable();
//------------------------------------------------------------------------------
//решение гуглом, иначе не мог додуматься... (((
function resizeBlock(){
let resizeBlock = document.querySelector('.resizeBlock');
let resizer = document.querySelector('.subResizeBlock');

resizer.addEventListener('mousedown', initDrag, false);

let startX, startY, startWidth, startHeight;

function initDrag(e) {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(resizeBlock).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(resizeBlock).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   resizeBlock.style.width = (startWidth + e.clientX - startX) + 'px';
   resizeBlock.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
     document.documentElement.removeEventListener('mouseup', stopDrag, false);
}
}
resizeBlock();
//------------------------------------------------------------------------------
//я так понял нужно было сделать кастомный рендж
function dragElem(){
let pointer = document.querySelector('.pointer');
let parent = document.querySelector('.roadTrack');
let flag = false;

let limits = {
  right: parent.offsetWidth + parent.offsetLeft - pointer.offsetWidth,
  left: parent.offsetLeft + 2
}
pointer.addEventListener('mousedown', function(){
  flag = true;
  parent.addEventListener('mousemove', event => {
    if(flag == true) movePoint(event);
  });
});
pointer.addEventListener('mouseup', function(){
  flag = false;
})
//лимиты с помощью гугла, иначе был полный затуп
function movePoint(e){
  let newLocation = {x:limits.left};
  if(e.pageX > limits.right){
    newLocation.x = limits.right;
  }else if(e.pageX > limits.left){
    newLocation.x = e.pageX;
  }
  pointer.style.left = newLocation.x - pointer.offsetWidth + 'px';
}
}
dragElem();
//------------------------------------------------------------------------------
function slider(){
let arrImages = ['./icons/react.png', './icons/angular.png', './icons/vue.png', './icons/svelte.png'];
let rightBtn = document.querySelector('.rightBtn');
let leftBtn = document.querySelector('.leftBtn');
let i = 0;
let img = document.querySelector('.slider img');
img.src = arrImages[0];
leftBtn.disabled = true;
rightBtn.addEventListener('click', function(){
  leftBtn.disabled = false;
  ++i;
  if(i == arrImages.length - 1) this.disabled = true;
  img.src = arrImages[i];
});
leftBtn.addEventListener('click', function(){
  rightBtn.disabled = false;
  --i;
  if(i == 0) this.disabled = true;
  img.src = arrImages[i];
});
}
slider();

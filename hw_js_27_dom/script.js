//------------------------------------------------------------------------------
function coloredBook(){
let booksUL = document.querySelector('.booksUL');
booksUL.addEventListener('click', function(e){
  this.querySelectorAll('span').forEach(elem => elem.classList.remove('colored'));
  if (e.target.tagName == 'SPAN') e.target.classList.add('colored');
});
}
coloredBook();
//------------------------------------------------------------------------------
function showHints(){
let parentDiv = document.querySelector('.btnsHints');
let tooltipElem;

parentDiv.addEventListener('mouseover', function(e){
  if (e.target.tagName == 'BUTTON'){
  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = `Tool tip ${e.target.dataset.num}`;
  e.target.parentElement.append(tooltipElem);
  let top = e.target.offsetTop - e.target.offsetHeight - 20;
  if (top <= 0){
    top = e.target.offsetTop + e.target.offsetHeight + 10;
    tooltipElem.classList.add('topTooltip');
  }
  let left = e.target.offsetLeft;
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
}
});
parentDiv.addEventListener('mouseout', function(e){
  if (e.target.tagName == 'BUTTON'){
    e.target.parentElement.removeChild(tooltipElem);
}
});
}
showHints();
//------------------------------------------------------------------------------

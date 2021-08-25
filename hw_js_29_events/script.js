//------------------------------------------------------------------------------
function coloredBook(){
let booksUL = document.querySelector('.booksUL');
let map = new Map();
let set = new Set();
let spans = document.querySelectorAll('.booksUL span');
booksUL.addEventListener('click', function(event){
if(event.target.tagName == 'SPAN'){

    if(event.ctrlKey){
      if(!map.has(event.target) == true){
        map.set(event.target, event.target.dataset.num);
      }else{
        map.delete(event.target);
      }
      spans.forEach(elem => elem.classList.remove('colored'));
      for(let span of map.keys()) span.classList.add('colored');
    }

    if(event.shiftKey){
      spans.forEach(elem => elem.classList.remove('colored'));
      map.set(event.target, event.target.dataset.num);
      for (let elem of map.values()){
        set.add(elem)
      }
      if(set.size > 1 && set.size < 3){
        let arr = Array.from(set);
        arr = arr.sort(sorted);
        for (let i = arr[0]; i <= arr[1]; i++){
          spans.forEach(elem => {
            if(elem.dataset.num == i) elem.classList.add('colored');
          });
        }
        map.clear();
        set.clear();
      }
    }

    if (!event.ctrlKey && !event.shiftKey){
      spans.forEach(elem => elem.classList.remove('colored'));
      event.target.classList.add('colored');
    }
}
});
}
coloredBook();
function sorted(a,b){
  if(a > b) return 1;
  if(a < b) return -1;
  if(a == b) return 0;
}
//------------------------------------------------------------------------------
function showText(){
let parentDiv = document.querySelector('.task2');
let textarea;
document.addEventListener('keydown', function(event){
  if(event.key == 'e' && event.ctrlKey){
    let infoBlock = document.querySelector('.infoBlock');
    event.preventDefault();
    textarea = document.createElement('TEXTAREA');
    textarea.value = infoBlock.innerHTML;
    parentDiv.append(textarea);
    parentDiv.removeChild(infoBlock);
    textarea.focus();
  }
  if(event.key == 's' && event.ctrlKey){
    event.preventDefault();
    let div = document.createElement('DIV');
    div.innerHTML = textarea.value;
    div.classList.add('infoBlock');
    parentDiv.append(div);
    parentDiv.removeChild(textarea);
  }
})
}
showText();
//------------------------------------------------------------------------------

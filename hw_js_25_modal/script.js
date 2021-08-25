function enterName(){
  let inp = document.querySelector('.userName');
  inp.addEventListener('input', function (){
    this.value = separateText(this.value);
  });
}
enterName();

function separateText(str){
  let separatedStr = str.replace(/\d/g, '');
  return separatedStr;
}
//------------------------------------------------------------------------------
function mainModal(){
let showModalBtn = document.querySelector('.showModal');
showModalBtn.addEventListener('click', showModal);
let closeModalBtn = document.querySelector('.closeModal');
closeModalBtn.addEventListener('click', closeModal);
// document.querySelector('.modalWrap').addEventListener('click', closeModal);
}
mainModal();

function showModal(){
  document.querySelector('.modalWrap').classList.remove('hidden');
  document.onkeydown = function(event){
  	if (event.keyCode == 27) closeModal();
  }
}
function closeModal(){
  document.querySelector('.modalWrap').classList.add('hidden');
  document.onkeydown = null;
}

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//конкретное решение ужасно дубляжом...
function addMessage(){
let btn = document.querySelector('.sendMessage');
let form = document.querySelector('.formMessage');
let parentMessages = document.querySelector('.messageWrapper');
let userNameInput = document.querySelector('.enterName');
let message = document.querySelector('.formMessage textarea');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  let now = new Date();
  if(message.value.length !== 0 && userNameInput.value !== ''){
    let div = document.createElement('div');
    div.setAttribute('class', 'message');
    parentMessages.appendChild(div);
      let header = document.createElement('div');
      header.classList.add('headerMessage');
      div.appendChild(header);
          let userName = document.createElement('div');
          userName.innerHTML = userNameInput.value;
          userName.classList.add('userName');
          header.appendChild(userName);
          let messageTime = document.createElement('div');
          messageTime.innerHTML = `${addZero(now.getHours())}:${addZero(now.getMinutes())}:${addZero(now.getSeconds())} ${now.toLocaleDateString()}`;
          messageTime.classList.add('messageTime');
          header.appendChild(messageTime);
      let body = document.createElement('div');
      body.classList.add('bodyMessage');
      body.innerHTML = message.value;
      div.appendChild(body);
  }
});
}
addMessage();

function addZero(num){
  return (num <= 9)? '0' + num: num;
}
//------------------------------------------------------------------------------
function answerTheQuestions(){
let arrQuest = document.querySelectorAll('.quest');
let out = document.querySelector('.outTestResult');
let btn = document.querySelector('.pushTestResult');
let firstRadioPack = document.getElementsByName('radio1');
let secondRadioPack = document.getElementsByName('radio2');
let thirdRadioPack = document.getElementsByName('radio3');
let nextQuest = document.querySelector('.nextQuest');
let i = 1;
nextQuest.addEventListener('click', function(){
arrQuest.forEach(elem => elem.classList.remove('active'));
arrQuest[i].classList.add('active');
i++;
if (i == arrQuest.length){
  this.style.display = 'none';
  btn.style.display = 'block';
}
});
btn.addEventListener('click', () => {
  let arrOfRadio = [...firstRadioPack, ...secondRadioPack, ...thirdRadioPack];
  let result = 0;
  for (let elem of arrOfRadio){
    if (elem.checked == true){
      result += +elem.value;
    }
  }
  out.innerHTML = `Ваш результат равен: ${result} правильных ответа из ${arrQuest.length}.`;
});
}
answerTheQuestions();
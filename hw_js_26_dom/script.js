function footBall(){
  let field = document.querySelector('.footballField');
  let ball = document.querySelector('.ball');
  field.addEventListener('click', function(event){
    console.log(event.clientX, event.clientY);
    ball.style.left = (event.pageX - ball.offsetWidth / 2) + 'px';
    ball.style.top = (event.pageY - ball.offsetHeight / 2) + 'px';
  })
}
footBall();

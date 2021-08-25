function trafficLight(){
  let btn = document.querySelector('.btnNext');
  let circles = document.querySelectorAll('.circle');
  let i = 0;
  btn.addEventListener('click', function (){
    this.style.cssText = 'box-shadow: 0px 0px 0px 0px rgba(138, 138, 138, 0.2)';
    circles.forEach(elem => {
      elem.classList.remove('opacity')
  });
    circles[i].classList.add('opacity');
    i++;
    if (i == circles.length) i = 0;
    setTimeout(() => {this.style.cssText = 'box-shadow: 3px 3px 2px 0px rgba(138, 138, 138, 0.4)';}, 200);
  });
}
trafficLight();

function getChocolate(){
let haveMoney = (parseFloat(prompt('Сколько денег у тебя в кошельке, сэр?'), 0)).toFixed(2);
let priceOfChocolate = (parseFloat(prompt('Сколько стоит шоколадка?', 0))).toFixed(2);
if (!isFinite(haveMoney) || !isFinite(priceOfChocolate)){
  alert(`Сэр, в поле для ввода было внесено не число, до свидания!!!`);
}else{
  let quantityOfChocolate = Math.floor(haveMoney / priceOfChocolate);
  let balance = haveMoney - (quantityOfChocolate * priceOfChocolate);
  alert(`Вы можете купить себе сэр ${quantityOfChocolate} шоколадок и у Вас еще останется ${balance.toFixed(2)} денег.`);
}
}
//getChocolate();

function reverseNum(){
let num;
do {
  num = parseInt(prompt('Введите трехзначное число:',''));
} while(num == null || num == undefined || num == '' || String(num).length < 3 || String(num).length > 3 || !isFinite(num))
alert(String(num).split('').reverse().join(''));
}
//reverseNum();

function isEvenNum(){
  let num = +prompt('Введите целое число:', 0);
  if (isFinite(num) && ((num ^ 0) === num)){
    alert(num % 2 == 0);
  }else{
    alert('Введено не целое число.');
  }
}
//isEvenNum();

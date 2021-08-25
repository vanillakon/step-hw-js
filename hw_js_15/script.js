//------------------------------------------------------------------------------
function out_calc(){
let enter_str_for_calc = document.querySelector('.enter_str_for_calc');
let get_calc_sym = document.querySelector('.get_calc_sym');
let out_res_calc = document.querySelector('.out_res_calc');
get_calc_sym.addEventListener('click', () => {
  let value = enter_str_for_calc.value.trim();
  if (value == null || value == '' || value == undefined){
      out_res_calc.innerHTML = 'Невозможно вывести количество символов в строке.';
  }else{
      out_res_calc.innerHTML = `${calc_sym_str(value)}`;
    }
});
}
out_calc();
function calc_sym_str(str){
  let w = 0, n = 0, s = 0;
str.replace(/([а-яёa-z]|[a-zа-яё])/gi, 'w').replace(/\d/g, 'n').replace(/\W/g,'s').split('').map(elem => {
  (elem == 'w')? w++: (elem == 'n')? n++: s++;
});
return `В заданной Вами строке: ${w} - букв, ${n} - цифр, ${s} - символов`;
}
//------------------------------------------------------------------------------
function out_res_of_change(){
let enter_num_to_str = document.querySelector('.enter_num_to_str');
let get_str_by_num = document.querySelector('.get_str_by_num');
let out_res_change = document.querySelector('.out_res_change');
get_str_by_num.addEventListener('click', () => {
  let num = enter_num_to_str.value.trim();
  if (isNaN(num) || num == null || num == '' || num == undefined){
      out_res_change.innerHTML = 'Невозможно перевсти число к строке.';
  }else if (num.length != 2){
      out_res_change.innerHTML = 'Вы ввели не двузначное число.';
  }else{
      out_res_change.innerHTML = `Введенное Вами число ${num} - ${change_num_to_str(num)}.`;
    }
});
}
out_res_of_change();
function change_num_to_str(num){
let nums1 = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'оди', 'две', 'три', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'];
let nums2 = ['двадцать', 'тридцать', 'сорок', 'пятдесят', 'шестдесят', 'семдесят', 'восемдесят', 'девяносто'];
let str = '';
if (num >= 0 && num <= 10){
  str = nums1[num];
}
if (num > 10 && num <= 19) {
  str = nums1[num] + 'надцать';
}
if (num >= 20 && num <= 99){
  str = String(num).split('');
  str = (str[1] >= 1 && str[1] <= 9)? nums2[str[0] - 2] + ' ' + nums1[str[1]]: nums2[str[0] - 2];
}
return str;
}
//------------------------------------------------------------------------------
function out_res_of_change_str(){
  let enter_str_to_change = document.querySelector('.enter_str_to_change');
  let get_new_str = document.querySelector('.get_new_str');
  let out_res_change_sym = document.querySelector('.out_res_change_sym');
  get_new_str.addEventListener('click', () => {
    let value = enter_str_to_change.value.trim();
    if (value == null || value == '' || value == undefined){
        out_res_change_sym.innerHTML = 'Невозможно заменить символы строки.';
    }else{
        out_res_change_sym.innerHTML = `${change_str(value)}`;
      }
  });
}
out_res_of_change_str();
function change_str(str){
  return str.split('').map(elem => {
    if (isNaN(elem)){
      elem = (elem != elem.toLowerCase())?elem.toLowerCase(): elem.toUpperCase();
    }else{
      elem = '_';
    }
return elem;
  }).join('');
}
//------------------------------------------------------------------------------
function out_res_convert_style(){
  let enter_style = document.querySelector('.enter_style');
  let get_camel_style = document.querySelector('.get_camel_style');
  let out_res_style = document.querySelector('.out_res_style');
  get_camel_style.addEventListener('click', () => {
    let value = enter_style.value.trim();
    if (value == null || value == '' || value == undefined){
        out_res_style.innerHTML = 'Невозможно конвертировать стиль в "CamelCase".';
    }else{
        out_res_style.innerHTML = `Результат: ${convert_style(value)}`;
      }
  });
}
out_res_convert_style();
function convert_style(str){
  return str.split('-').map((elem, index) => (index == 0)? elem : elem[0].toUpperCase() + elem.slice(1)).join('');
}
//------------------------------------------------------------------------------
function out_res_convert_to_abr(){
  let enter_text_to_abr = document.querySelector('.enter_text_to_abr');
  let get_abr = document.querySelector('.get_abr');
  let out_res_abr = document.querySelector('.out_res_abr');
  get_abr.addEventListener('click', () => {
    let value = enter_text_to_abr.value.trim();
    if (value == null || value == '' || value == undefined){
        out_res_abr.innerHTML = 'Невозможно перевести в аббревиатуру.';
    }else{
        out_res_abr.innerHTML = `Результат: ${convert_to_abr(value)}`;
      }
  });
}
out_res_convert_to_abr();
function convert_to_abr(str){
  return str.replace(/([^а-яёa-z1-9]|[^a-zа-яё1-9])/gi, ' ').split(' ').map(elem => {
    return (isNaN(elem))? elem[0].toUpperCase(): elem;
  }).join('');
}
//------------------------------------------------------------------------------

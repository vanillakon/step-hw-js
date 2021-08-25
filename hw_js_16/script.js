//------------------------------------------------------------------------------
//функция вывода конкатенации строк
function out_concta_strs(){
  let enter_strs_for_concat = document.querySelector('.enter_strs_for_concat');
  let get_concat = document.querySelector('.get_concat');
  let out_res_concat = document.querySelector('.out_res_concat');
  get_concat.addEventListener('click', () => {
    let strs = enter_strs_for_concat.value.trim().split(',');
    if (strs.length == 1 && strs[0] == ''){
        out_res_concat.innerHTML = 'Невозможно конкатенировать строки.';
     }else{
        out_res_concat.innerHTML = `${concat_strs(...strs)}`;
     }
  });
}
out_concta_strs();
//функция конкатенации строк
function concat_strs(...rest){
  return rest.join(' ');
}
//------------------------------------------------------------------------------
//функция вывода решения примера из строки
function out_res_calc_str(){
  let enter_nums_by_str = document.querySelector('.enter_nums_by_str');
  let get_calc_by_str = document.querySelector('.get_calc_by_str');
  let out_res_calc = document.querySelector('.out_res_calc');
  get_calc_by_str.addEventListener('click', () => {
    let str = enter_nums_by_str.value.trim();
    if (str == '' || str == undefined || str == null){
        out_res_calc.innerHTML = 'Невозможно вывести решение.';
     }else{
        out_res_calc.innerHTML = `Ответ: ${calc_str(str)}`;
     }
  });
}
out_res_calc_str()
//функция калькулятор вычисления примера из строки
function calc_str(str){
str = str.replace(/\s/g, '');
return eval(str);
}
//------------------------------------------------------------------------------
//функция вывода информации по заданному url
function out_res_info_by_url(){
  let enter_url = document.querySelector('.enter_url');
  let get_info_by_url = document.querySelector('.get_info_by_url');
  let out_info_by_url = document.querySelector('.out_info_by_url');
  get_info_by_url.addEventListener('click', () => {
    let str = enter_url.value.trim();
    if (str == '' || str == null || str == undefined){
        out_info_by_url.innerHTML = 'Не выполнено условие ввода данных.';
     }else if(str.startsWith('http://') || str.startsWith('https://')){
        out_info_by_url.innerHTML = `${out_str_info(...func_info_by_url(str))}`;
     }else{
        out_info_by_url.innerHTML = 'Вы ввели не url.';
     }
  });
}
out_res_info_by_url();
//функция возврата массива элементов url
function func_info_by_url(str){
return str.split('/').filter(elem => isNaN(elem)).map((elem, index) => {
  return (index == 0)? `протокол: ${elem.slice(0, elem.length - 1)}`: (index == 1)? `домен: ${elem}`: (index == 2)? `путь: /${elem}`: '/' + elem;
});
}
//функция выполнения
function out_str_info(elem1, elem2, ...rest){
  return (elem2 == undefined)? `В данном url только ${elem1}`: `${elem1}, ${elem2}, ${rest.join('')}`;
}
//------------------------------------------------------------------------------
//функция вывода элементов строки в виде массива без использования split
function out_arr_by_str(){
  let enter_str_to_split = document.querySelector('.enter_str_to_split');
  let get_split_str = document.querySelector('.get_split_str');
  let out_res_split_str = document.querySelector('.out_res_split_str');
  get_split_str.addEventListener('click', () => {
    let str_with_delimiter = enter_str_to_split.value.trim().split(',').map(elem => elem.trim());
    if (str_with_delimiter.length != 2){
      out_res_split_str.innerHTML = 'Не выполнено условие ввода данных.';
    }else if(str_with_delimiter[0].indexOf(str_with_delimiter[1]) == -1){
      out_res_split_str.innerHTML = 'Ничем не могу помочь, разделитель отсутствует в строке.';
    }else{
      out_res_split_str.innerHTML = `Результат: ${get_arr_by_str(str_with_delimiter[0], str_with_delimiter[1])}`;
      console.log(get_arr_by_str(str_with_delimiter[0], str_with_delimiter[1]));
    }
  });
}
out_arr_by_str();
//функция разделитель строки в возврата подстрок в массиве по заданному разделителю
function get_arr_by_str(str, sym){
//return str.split(sym);
let arr_index_sym = [];
for (let i = 0; i < str.length; i++){
let index = str.indexOf(sym, i);
if (index != -1){
  arr_index_sym.push(index);
}else{
  break;
}
}
let arr_result = [];
arr_index_sym = Array.from(new Set(arr_index_sym));
let k = 0
for (let elem of arr_index_sym){
  arr_result.push(str.slice(k, elem));
  k = elem + 1;
  if (elem == arr_index_sym[arr_index_sym.length - 1]){
    arr_result.push(str.slice(k));
  }
}
return arr_result.filter(elem => elem !== '');
}
//------------------------------------------------------------------------------
//функция вывода результата замены элементов строки
function out_change_words(){
  let enter_str_to_change = document.querySelector('.enter_str_to_change');
  let get_change = document.querySelector('.get_change');
  let out_res_change = document.querySelector('.out_res_change');
  get_change.addEventListener('click', () => {
    let str = enter_str_to_change.value.trim();
    if (str == '' || str == undefined || str == null){
        out_res_change.innerHTML = 'Не выполнено условие ввода данных.';
     }else{
       let arr = [];
       arr[0] = str.substring(0, str.indexOf(','));
       arr[1] = str.substring(str.indexOf(',') + 2);
       let filter_arr = arr.filter((elem, index) => {
          if (index != 0) return elem;
        }).join('').split(',').map(elem => elem.trim());
        out_res_change.innerHTML = `Ответ: ${get_change_words(arr[0], ...filter_arr)}`;
     }
  });
}
//функция замены элементов строки
out_change_words();
function get_change_words(str, ...params){
let str_arr = str.split('%');
let arr_index = [];
let arr_index2 = {};
arr_index2['num'] = [];
arr_index2['space'] = [];
for (let i = 0; i < str_arr.length; i++){
  if (str_arr[i].indexOf('.') != -1){
    arr_index.push(i);
    arr_index2['num'].push(i);
  }
  if (str_arr[i].indexOf(' ') != -1){
    arr_index2['space'].push(i);
  }
}
return str_arr.map(elem => {
  return elem = (!isNaN(elem))? params[elem - 1]: elem;
}).map((elem, index) => {
  if (arr_index2['num'].includes(index)){
    elem = elem + '.';
  }else if(arr_index2['space'].includes(index - 1)) {
    elem = elem + ' ';
  }else{
    elem = elem;
  }
  return elem;
}).join('');
}
//console.log(get_change_words('Today is %1 %2.%3.%4 ', 'Monday', 10, 8, 2020));

//------------------------------------------------------------------------------
//массив найменования
let fruits = ['Ананас', 'Яблоко', 'Груша', 'Банан', 'Кокос'];

//создание объекта покупок
function Purchases(name, quantity, bought){
  this.name = name;
  this.quantity = quantity;
  this.bought = bought;
}

//заполнение массива объектами - покупками
function create_arr_of_fruits(){
  let arr_of_fruits = [];
  let bought = false;
  for (let elem of fruits){
    let random = Math.floor(Math.random() * 100) + 1;
    bought = (bought)? false: true;
    arr_of_fruits.push(new Purchases(elem, random, bought));
  }
  return arr_of_fruits;
}
let arr_of_fruits = create_arr_of_fruits();
//console.log(arr_of_fruits);

//сортировка объектов сперва некупленные
function out_bought_fruits(arr){
  let sorted_arr_clone_arr_of_fruits = [];
  let clone_arr_of_fruits = [];
  //клонирование массива объектов и продолжение работы с ним
  for (let i = 0; i < arr.length; i++){
    clone_arr_of_fruits[i] = Object.assign({}, arr[i]);
  }
  for (let i = 0; i < clone_arr_of_fruits.length; i++){
    if (clone_arr_of_fruits[i]['bought'] == false) sorted_arr_clone_arr_of_fruits.push(clone_arr_of_fruits.splice(i, 1)[0]);
  }
  return sorted_arr_clone_arr_of_fruits.concat(clone_arr_of_fruits);
}

//отсортированный массив покупок начиная с некупленных
let sorted_arr = out_bought_fruits(arr_of_fruits);

//изменение количества у объекта
function add_purchases_to_arr(obj_fruit){
  let set_of_names_fruits = sorted_arr.map(elem => elem['name']);
  let clone_sorted_arr = [];
  //клонирование массива объектов и продолжение работы с ним
  for (let i = 0; i < sorted_arr.length; i++){
    clone_sorted_arr[i] = Object.assign({}, sorted_arr[i]);
  }
  if (set_of_names_fruits.indexOf(obj_fruit['name']) != -1){
    for (let i = 0; i < clone_sorted_arr.length; i++){
    if (clone_sorted_arr[i]['name'] == obj_fruit['name']) {
      if (clone_sorted_arr[i]['bought'] == false){
        clone_sorted_arr[i]['quantity'] += obj_fruit['quantity'];
      }else{
        clone_sorted_arr[i]['quantity'] = Math.abs(obj_fruit['quantity'] - clone_sorted_arr[i]['quantity']);
        clone_sorted_arr[i]['bought'] = false;
      }
      }
    }
  }else{
    clone_sorted_arr.push(obj_fruit);
  }
return clone_sorted_arr;
}

//создание отсортированого клона массива покупок с изменением количества определенного товара
let clone_sorted_arr_of_fruits;

//функция добавления позиции в список продуктов или изменение количества товара
function add_new_or_change_purchases_to_arr(){
  let parent = document.querySelector('.parent_table_purchases');
  let btn = document.querySelector('.get_plus_purchases');
  let name = document.querySelector('.enter_name_new_purchases');
  let quantity = document.querySelector('.enter_quantity_new_purchases');
  // let status = document.querySelector('.enter_status_new_purchases');
  let out_result_plus_purchases = document.querySelector('.out_result_plus_purchases');
  btn.addEventListener('click', () => {
    out_result_plus_purchases.innerHTML = '';
    let name_purchases = name.value.trim();
    let quantity_purchases = +quantity.value.trim();
    if (name_purchases == '' || name_purchases == undefined || name_purchases == null || !isFinite(quantity_purchases) || quantity_purchases == '' || quantity_purchases == undefined || quantity_purchases == null){
      out_result_plus_purchases.innerHTML = 'Невозможно добавить продукт в список. Не выполнены условия добавления.';
    }else{
      parent.innerHTML = '';
      clone_sorted_arr_of_fruits = add_purchases_to_arr(new Purchases(name_purchases, quantity_purchases, false));
      out_table_of_purchases(clone_sorted_arr_of_fruits);
    }
  return clone_sorted_arr_of_fruits;
});
}
add_new_or_change_purchases_to_arr();

//изменение значения покупки у объекта
function buyFruit(name){
  let clone_clone_sorted_arr_of_fruits = [];
  //клонирование массива объектов и продолжение работы с ним
  // for (let i = 0; i < clone_sorted_arr_of_fruits.length; i++){
  //   clone_clone_sorted_arr_of_fruits[i] = Object.assign({}, clone_sorted_arr_of_fruits[i]);
  // }
  for (let i = 0; i < sorted_arr.length; i++){
    clone_clone_sorted_arr_of_fruits[i] = Object.assign({}, sorted_arr[i]);
  }
  for (let elem of clone_clone_sorted_arr_of_fruits){
    if (elem['name'] == name) elem['bought'] = true;
  }
  return clone_clone_sorted_arr_of_fruits;
}

//функция создания таблицы товаров
function create_table_of_purchases(arr){
  let table = document.createElement('TABLE');
  let title_tr = document.createElement('TR');
  for (let key in arr[0]){
    let th = document.createElement('TH');
    th.innerHTML = key + ':';
    title_tr.appendChild(th);
  }
  table.appendChild(title_tr);
  for (let elem of arr){
    let tr = document.createElement('TR');
    for (let key in elem){
      let td = document.createElement('TD');
      td.innerHTML = elem[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

//функция дефолтного вывода сформированной таблицы
function out_table_of_purchases(arr){
  let parent = document.querySelector('.parent_table_purchases');
  parent.appendChild(create_table_of_purchases(arr));
}
out_table_of_purchases(arr_of_fruits);

//функция вывода отсортированной таблицы (вверх товар со статусом покупки 'false')
function out_table_sorted_purchases(){
  let btn = document.querySelector('.get_out_sorted_arr');
  let parent = document.querySelector('.parent_table_purchases');
  btn.addEventListener('click', () => {
    parent.innerHTML = '';
    out_table_of_purchases(sorted_arr);
  });
}
out_table_sorted_purchases();

//функция изменения статуса товара на купленный 'true'
function change_status_purchases(){
  let enter_name_purchases = document.querySelector('.enter_true_purchases');
  let btn = document.querySelector('.get_true_purchases');
  let parent = document.querySelector('.parent_table_purchases');
  let out_status = document.querySelector('.out_false_result_change_status');
  btn.addEventListener('click', () => {
    out_status.innerHTML = '';
    let value_of_input_for_change_status = enter_name_purchases.value.trim();
    if (value_of_input_for_change_status == '' || value_of_input_for_change_status == undefined || value_of_input_for_change_status == null){
      out_status.innerHTML = `Невозможно изменить статус покупки, Вы не ввели наименование товара.`;
    }else if(!sorted_arr.some(elem => elem['name'] == value_of_input_for_change_status)){
      out_status.innerHTML = `Невозможно изменить статус покупки, не было найдено данный товар.`;
    }else{
      parent.innerHTML = '';
      out_table_of_purchases(buyFruit(value_of_input_for_change_status));
    }
  });
}
change_status_purchases();

//------------------------------------------------------------------------------
//функция создания объекта товара
function Product(name, quantity, price){
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

//массив наименования товаров в чеке
let arr_of_products_name = ['Куртка', 'Штаны', 'Носки', 'Кроссовки', 'Ботинки'];

//функция заполнения массива объектами товаров
function push_arr_of_products(){
  let arr_of_products = [];
  for (let i = 0; i < arr_of_products_name.length; i++){
    let random_quantity = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let random_price = Math.floor(Math.random() * (1500 - 300 + 1)) + 300;
    arr_of_products[i] = new Product(arr_of_products_name[i], random_quantity, random_price);
  }
  return arr_of_products;
}

//массива объектов товаров в чеке
let products_check = push_arr_of_products();

//функция создания чека в виде массива
function create_check(){
let parent = document.querySelector('.parent');
parent.appendChild(create_table(products_check));
let out_max_price = document.querySelector('.out_max_price_in_check');
let out_average_cost = document.querySelector('.out_average_cost_in_check');
out_max_price.innerHTML = `Максимальный прайс в данном чеке за единицу товара: ${max_price_in_check(products_check)}`;
out_average_cost.innerHTML = `Средняя стоимость товара за единицу в данном чеке: ${get_average_cost(products_check)}`;
}
create_check();

//функция создания таблицы
function create_table(arr){
  let table = document.createElement('TABLE');
  let title_tr = document.createElement('TR');
  for (let key of Object.keys(arr[0])){
    let th = document.createElement('TH');
    th.innerHTML = key + ':';
    title_tr.appendChild(th);
  }
table.appendChild(title_tr);
  for (let i = 0; i < arr.length; i++){
    let tr = document.createElement('TR');
      for (let key in arr[i]){
          let td = document.createElement('TD');
          td.innerHTML = arr[i][key];
          tr.appendChild(td);
          if (td.innerHTML == max_price_in_check(products_check)) td.classList.add('colored');
      }
    table.appendChild(tr);
  }
  return table;
}

//функция подсчета суммы покупок по чеку
function sum_of_price(arr){
  return arr.reduce((sum, elem) => +sum + (elem['quantity'] * elem['price']), 0);
}

//функция нахождения максимального прайса в чеке
function max_price_in_check(arr){
let arr_of_max_prices = [];
for (let elem of arr){
  arr_of_max_prices.push(elem['price']);
}
return arr_of_max_prices.sort(sorted)[arr_of_max_prices.length - 1];
}

//функция нахождения максимальной суммы покупки в чеке
function max_sum_position_in_check(arr){
let arr_of_max_sum_of_positions = [];
for (let elem of arr){
  arr_of_max_sum_of_positions.push(elem['quantity'] * elem['price']);
}
return arr_of_max_sum_of_positions.sort(sorted)[arr_of_max_sum_of_positions.length - 1];
}

//функция получения средней стоимости
function get_average_cost(arr){
  let quantity_all_products = arr.reduce((sum, elem) => +sum + +elem['quantity'], 0);
  return +(sum_of_price(arr) / quantity_all_products).toFixed(2);
}

//фугкция сортировки массива
function sorted(a, b){
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

//функция добавления в чек столбца подсчета суммы по позициям и строки общей суммы чека
function add_col_and_row_to_check(){
  let table = document.querySelector('.parent table');
  let trs_in_check = table.querySelectorAll('tr');
  for (let i = 0; i < trs_in_check.length; i++){
    let td = document.createElement('TD');
    if (i == 0){
      td.innerHTML = 'sum:';
      td.setAttribute('style', 'font-weight: bold;');
    }else{
      td.innerHTML = trs_in_check[i].children[1].innerHTML * trs_in_check[i].children[2].innerHTML;
    }
    trs_in_check[i].appendChild(td);
    if(td.innerHTML == max_sum_position_in_check(products_check)) td.classList.add('colored');
  }
  let tr_of_sum = document.createElement('TR');
  table.appendChild(tr_of_sum);
  for (let i = 0; i < tr_of_sum.previousElementSibling.children.length; i++){
    let td = document.createElement('TD');
    td.innerHTML = '-';
    tr_of_sum.appendChild(td);
  }
  tr_of_sum.lastElementChild.innerHTML = sum_of_price(products_check);
}
add_col_and_row_to_check();


//------------------------------------------------------------------------------
//функция создания объекта стилей
function Style(name, value){
  this.name = name;
  this.value = value;
}

//массив стилей
let arr_of_style = [new Style('color', 'red'), new Style('font-size', '20px'), new Style('text-decoration', 'line-through'), new Style('text-align', 'justify'), new Style('letter-spacing', '1px')];

//функция вывода заданного текста с применением стилей, согласно условия
function decoration_text(arr, text){
let arr_of_styles = [];
for (let elem of arr){
    arr_of_styles.push(`${elem['name']}:${elem['value']}`);
  }
//Вызов document.write() из асинхронно-загруженного внешнего сценария был проигнорирован.
//document.write(`<p style = '${arr_of_styles.join('; ')}'>${text}</p>`);
}

//функция применения стилей к заданному тексту без использования document.write
function decoration_text_2(arr, text){
  let arr_of_styles = [];
  for (let elem of arr){
      arr_of_styles.push(`${elem['name']}:${elem['value']}`);
    }
  let out_text = document.createElement('P');
  out_text.innerHTML = text;
  out_text.setAttribute('style', arr_of_styles.join('; '));
  document.querySelector('.parent_text').appendChild(out_text);
}

//функция вывода заданного текста с применением стилей из массива стилей
function out_styles_text(){
  let btn = document.querySelector('.get_style_text');
  let enter_text = document.querySelector('.enter_text');
  let out_false_result = document.querySelector('.out_false_result');
  btn.addEventListener('click', () => {
    document.querySelector('.parent_text').innerHTML = '';
    out_false_result.innerHTML = '';
    let value_of_input = enter_text.value.trim();
    if (value_of_input == '' || value_of_input == null){
      out_false_result.innerHTML = `Невозможно применить стили ибо текст не был введен.`;
    }else{
      decoration_text_2(arr_of_style, value_of_input);
    }
  });
}
out_styles_text();
//------------------------------------------------------------------------------

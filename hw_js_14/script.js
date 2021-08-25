//создание объекта аудитория
function Classes(name, seats, faculty){
  this.name = name;
  this.seats = seats;
  this.faculty = faculty;
}

//создание объекта группа
function Group(name, quantity, faculty){
  this.name = name;
  this.quantity = quantity;
  this.faculty = faculty;
}

//массив факультетов
let arr_of_faculties = ['Biomedical Technology', 'Computational Mathematics', 'Electronics', 'Technical Cyberetics', 'Mobile Technology'];

let parent_for_out_table = document.querySelector('.parent_for_table_classes');
let arr_of_classes = [];

//создание объекта - группа
//let group = new Group('123', 18, 'Biomedical Technology');

//на случай необходимости функция заполнения массива группами
// let arr_of_groups = [];
// function push_arr_of_groups(arr){
//   let num = 0;
//   for (let i = 0; i < 15; i++){
//     let random_name_group = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
//     let random_quantity_group = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
//     arr.push(new Group(String(random_name_group), random_quantity_group, arr_of_faculties[num]));
//     (num < arr_of_faculties.length - 1)? num++ : num = 0;
//   }
//   return arr;
// }
// push_arr_of_groups(arr_of_groups);

//функция заполнения массива аудиториями
function push_arr_of_classes(arr){
let num = 0;
for (let i = 0; i < 8; i++){
  let random_seats = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  let random_name_class = Math.floor(Math.random() * (555 - 100 + 1)) + 100;
  arr.push(new Classes(String(random_name_class), random_seats, arr_of_faculties[num]));
  (num < arr_of_faculties.length - 1)? num++ : num = 0;
}
return arr;
}
push_arr_of_classes(arr_of_classes);

//функция вывода аудиторий под определенную группу
function out_classes_for_group(arr, group){
  let clone_arr_of_classes = [];
  //клонирование массива объектов и продолжение работы с ним
  for (let i = 0; i < arr.length; i++){
    clone_arr_of_classes[i] = Object.assign({}, arr[i]);
  }
  let arr_of_classes_for_group = [];
  for (let elem of clone_arr_of_classes){
    if (elem['seats'] >= group['quantity'] && elem['faculty'] == group['faculty']) arr_of_classes_for_group.push(elem);
  }
  return arr_of_classes_for_group;
}

//функция создания таблицы из аудиторий
function create_table(arr){
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

//функция вывода аудиторий
function out_all_classes(arr){
parent_for_out_table.appendChild(create_table(arr));
}
out_all_classes(arr_of_classes);

//функция вывода аудиторий по заданному факультету
function out_classes_for_faculty(arr, name_facult){
let clone_arr_of_classes = [];
//клонирование массива объектов и продолжение работы с ним
for (let i = 0; i < arr.length; i++){
  clone_arr_of_classes[i] = Object.assign({}, arr[i]);
}
clone_arr_of_classes = clone_arr_of_classes.filter(elem => elem['faculty'] == name_facult);
out_all_classes(clone_arr_of_classes);
return arr;
}

//функция сортировки
function sorted(a, b){
  if (a > b) return 1;
  if (a < b) return -1;
  if (a == b) return 0;
}

//функция сортировки аудиторий в зависимости количества мест
function sorted_classes_by_quantity(arr){
let clone_arr_of_classes = [];
//клонирование массива объектов и продолжение работы с ним
for (let i = 0; i < arr.length; i++){
  clone_arr_of_classes[i] = Object.assign({}, arr[i]);
}
let arr_quantity = clone_arr_of_classes.map(elem => elem['seats'] + elem['name']);
arr_quantity = arr_quantity.sort(sorted);
let sorted_arr_quantity_of_classes = [];
for (let item of arr_quantity){
  for (let elem of arr){
    if (item == elem['seats'] + elem['name']) sorted_arr_quantity_of_classes.push(elem);
  }
}
return sorted_arr_quantity_of_classes;
}

//функция сортировки аудиторий в зависимости названия
function sorted_classes_by_name(arr){
let clone_arr_of_classes = [];
//клонирование массива объектов и продолжение работы с ним
for (let i = 0; i < arr.length; i++){
  clone_arr_of_classes[i] = Object.assign({}, arr[i]);
}
let arr_name = clone_arr_of_classes.map(elem => elem['name']);
arr_name = arr_name.sort(sorted);
let sorted_arr_name_of_classes = [];
for (let item of arr_name){
  for (let elem of arr){
    if (item == elem['name']) sorted_arr_name_of_classes.push(elem);
  }
}
return sorted_arr_name_of_classes;
}

//функция ввода факультета и вывод аудиторий под него
function show_classes_for_faculty(){
  let btn = document.querySelector('.show_classes');
  let out_result = document.querySelector('.out_result_search_classes');
  let enter_faculty = document.querySelector('.enter_faculty_for_classes');
  btn.addEventListener('click', () => {
    out_result.innerHTML = '';
    let faculty = enter_faculty.value.trim();
    if (faculty == '' || faculty == null || faculty == undefined){
      out_result.innerHTML = 'Вы не ввели факультет для поиска аудиторий.';
    }else if(!(arr_of_classes.some(elem => elem['faculty'] == faculty))){
      out_result.innerHTML = 'Проверьте правильность ввода факультета.';
    }else{
      out_classes_for_faculty(arr_of_classes, faculty);
    }
    enter_faculty.value = '';
  });
}
show_classes_for_faculty();

//функция поиска и вывода аудиторий под группу
function show_classes_for_group(){
  let enter_group_name = document.querySelector('.enter_group_name');
  let enter_group_quantity = document.querySelector('.enter_group_quantity');
  let enter_group_faculty = document.querySelector('.enter_group_faculty');
  let out_result_search_classes_for_group = document.querySelector('.out_result_search_classes_for_group');
  let show_classes_for_group = document.querySelector('.show_classes_for_group');
  show_classes_for_group.addEventListener('click', () => {
    out_result_search_classes_for_group.innerHTML = '';
    let value_enter_group_name = enter_group_name.value.trim();
    let value_enter_group_quantity = enter_group_quantity.value.trim();
    let value_enter_group_faculty = enter_group_faculty.value.trim();
    let arr_of_group_info = [value_enter_group_name, value_enter_group_quantity, value_enter_group_faculty];
    if (arr_of_group_info.some(elem => elem == '' || elem == null || elem == undefined)){
      out_result_search_classes_for_group.innerHTML = 'Вы не выполнили условия по вводу данных группы.';
    }else if(!(arr_of_classes.some(elem => elem['faculty'] == value_enter_group_faculty))){
      out_result_search_classes_for_group.innerHTML = 'Проверьте правильность ввода факультета.';
    }else if(isNaN(arr_of_group_info[1])){
      out_result_search_classes_for_group.innerHTML = 'Проверьте правильность ввода количества студентов группы.';
    }else{
      let group = new Group(value_enter_group_name, Number(value_enter_group_quantity), value_enter_group_faculty);
      if (out_classes_for_group(arr_of_classes, group).length == 0){
        out_result_search_classes_for_group.innerHTML = 'Невозможно подобрать аудиторию. В группе слишком много учащихся. Аудиториям не хватает мест для размещения.';
      }else{
        out_all_classes(out_classes_for_group(arr_of_classes, group));
      }
    }
  });
}
show_classes_for_group();

//вывод по клику групп отсортированных по количеству мест
let btn_for_sorted_by_quantity = document.querySelector('.get_out_sorted_by_quantity');
btn_for_sorted_by_quantity.addEventListener('click', function func1() {
  out_all_classes(sorted_classes_by_quantity(arr_of_classes));
  this.removeEventListener('click', func1);
});

//вывод по клику групп отсортированных по названию аудитории
let btn_for_sorted_by_class_name = document.querySelector('.get_out_sorted_by_name');
btn_for_sorted_by_class_name.addEventListener('click', function func2() {
  out_all_classes(sorted_classes_by_name(arr_of_classes));
  this.removeEventListener('click', func2);
});

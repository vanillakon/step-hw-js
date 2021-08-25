let newCssClass = new CssClass('modify', [{'color': 'red'}, {'font-size': '20px'}, {'text-transform': 'uppercase'}]); // создаем объект 
console.log(newCssClass.getCss()); // с помощью метода выозвращаем выполнение класса в виде строки
newCssClass.addStyle('text-align', 'center'); // добавляет в класс стиль
console.log(newCssClass.getCss());
newCssClass.removeStyle('color'); // удаляем с помощью метода стиль с название 'color'
console.log(newCssClass.getCss());

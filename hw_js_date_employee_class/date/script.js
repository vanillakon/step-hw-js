function showDate() {
  //без использования материалайза
  /*   let date = new ExtendedDate(28, 6, 2021);
  console.log(date.getDateInText());
  console.log(date.isFuture());
  console.log(date.isLeapYear());
  console.log(date.nextDate()); */

  //с использованием дейтпикера материалайза
  let table = document.querySelector(".table");
  document.querySelector(".datepicker").addEventListener("change", function () {
    let date = new ExtendedDate(...this.value.split("/"));
    let operations = [
      date.getDateInText(),
      date.isFuture(),
      date.isLeapYear(),
      date.nextDate(),
    ];
    let tr = document.createElement("tr");
    for (let i = 0; i < operations.length; i++) {
      let td = document.createElement("td");
      td.innerHTML = operations[i];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
}

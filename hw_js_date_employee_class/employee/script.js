function show() {
  let arrEmployees = [
    new Employee("Anton", 28, 5000, "Programmer"),
    new Employee("Antonin", 38, 10000, "ProgrammerPlus"),
    new Employee("Antonian", 48, 15000, "ProgrammerDoublePlus"),
  ];
  let table = new EmpTable(arrEmployees);
  document.querySelector(".container").innerHTML = table.getHtml();
}

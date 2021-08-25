class EmpTable {
  constructor(arr) {
    this.arr = arr;
    this.str = "";
  }
  getHtml() {
    this.str = "<table>";
    this.str +=
      "<tr><th>Name:</th><th>Age:</th><th>Salary:</th><th>Position:</th></tr>";
    for (let i = 0; i < this.arr.length; i++) {
      let tr = "<tr>";
      for (let key in this.arr[i]) {
        let td = "<td>";
        td += this.arr[i][key];
        td += "</td>";
        tr += td;
      }
      tr += "</tr>";
      this.str += tr;
    }
    this.str += "</table>";
    return this.str;
  }
}

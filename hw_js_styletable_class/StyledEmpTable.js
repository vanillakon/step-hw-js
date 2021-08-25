class StyledEmpTable extends EmpTable {
  constructor(arr) {
    super(arr);
    this.styles = "";
  }
  getStyles() {
    this.styles = "style='color: red; background: #f2f2f2; font-size: 18px;'";
    return this.styles;
  }
  getHtml(styles) {
    let table = super.getHtml();
    let retable = table.slice(0, 6) + ` ${styles}` + table.slice(6);
    return retable;
  }
}

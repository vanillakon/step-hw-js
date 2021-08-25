class CssClass {
  constructor(name, arrStyle) {
    this.name = name;
    this.arrStyle = arrStyle;
  }
  addStyle(styleName, styleParam){
    let newStyle = {[styleName] : styleParam};
    if (Array.isArray(this.arrStyle)){
      this.arrStyle.push(newStyle);
    }
  }
  removeStyle(styleName){
    this.arrStyle = this.arrStyle.filter(elem => !elem.hasOwnProperty(styleName));
  }
  getCss(){
    let strStyle = '';
    for (let elem of this.arrStyle){
      for (let [key, value] of Object.entries(elem)){
        strStyle += `${key}: ${value};`;
      }
    }
    return this.str = '.' + this.name + '{' + strStyle + '}';
  }
}
class Element {
  constructor() {
    this.id = "";
    this.classes = [];
    this.content = "";
    this.children = [];
    this.tag = "";
    this.styles = [];
  }
  setId(id) {
    return ` id="${this.id}"`;
  }
  addClass(cssClass) {
    return !this.classes.length
      ? ""
      : `${this.classes.reduce((accum, item, index, arr) => {
          accum += item;
          if (index !== arr.length - 1) {
            accum += " ";
          }
          return accum;
        }, 'class="')}"`;
  }
  setContent(text) {
    return text.length ? "" : text;
  }
  addChild(child) {
    return this.children.reduce((accum, item) => accum + item, "");
  }
  addStyles(style) {
    return !this.styles.length
      ? ""
      : `${this.styles.reduce((accum, item, index, arr) => {
          accum += item;
          if (index !== arr.length - 1) {
            accum += "; ";
          }
          return accum;
        }, ' style="')}"`;
  }
  print() {
    return `<${this.tag} ${this.addClass()}${this.setId()}${this.addStyles()}>${
      this.content
    }${this.addChild()}</${this.tag}>`;
  }
}

class DomBuilder {
  constructor() {
    this.element = new Element();
  }
  create(tagName) {
    this.element.tag = tagName;
    return this;
  }
  withClass(className) {
    this.element.classes.push(className);
    return this;
  }
  withId(idName) {
    this.element.id = idName;
    return this;
  }
  withStyle(style) {
    this.element.styles.push(style);
    return this;
  }
  withChild(childElem) {
    this.element.children.push(childElem);
    return this;
  }
  withContent(text) {
    this.element.content = text;
    return this;
  }
  get result() {
    return this.element.print();
  }
}

let p3 = new DomBuilder()
  .create("p")
  .withId("p3")
  .withStyle("font-size: 24px")
  .withStyle("color: red")
  .withClass("text")
  .withClass("colored")
  .withStyle("text-align: center")
  .withContent("This is new p...").result;
let div = new DomBuilder()
  .create("div")
  .withId("main")
  .withClass("container")
  .withChild(p3).result;

console.log(p3);
console.log(div);
document.body.innerHTML = div;

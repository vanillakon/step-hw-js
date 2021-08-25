class Element {
  constructor() {
    this.id = "";
    this.classes = [];
    this.content = "";
    this.children = [];
    this.tag = "";
  }
  setId(id) {
    return ` id="${this.id}"`;
  }
  addClass(cssClass) {
    return !this.classes.length
      ? ""
      : `${this.classes.reduce((accum, item) => accum + item, 'class="')}"`;
  }
  setContent(text) {
    return text.length ? "" : text;
  }
  addChild(child) {
    return this.children.reduce((accum, item) => accum + item, "");
  }
  print() {
    return `<${this.tag} ${this.addClass()}${this.setId()}>${
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

let p1 = new DomBuilder()
  .create("p")
  .withId("p1")
  .withClass("text")
  .withContent("Hello,").result;
let p2 = new DomBuilder()
  .create("p")
  .withId("p2")
  .withClass("text")
  .withContent("world!").result;
let div = new DomBuilder()
  .create("div")
  .withId("main")
  .withClass("container")
  .withChild(p1)
  .withChild(p2).result;

console.log(p1);
console.log(p2);
console.log(div);
document.body.innerHTML = div;

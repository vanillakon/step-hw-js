class HtmlElement {
  constructor(
    tag,
    isClose = false,
    text = "",
    attrs = [],
    styles = [],
    children = []
  ) {
    this.tag = tag;
    this.isClose = isClose;
    this.text = text;
    this.attrs = attrs;
    this.styles = styles;
    this.children = children;
  }

  setAttr(attr) {
    this.attrs.push(attr);
  }

  setStyle(style) {
    this.styles.push(style);
  }

  pushChild(child) {
    if (!(child instanceof HtmlElement))
      throw new Error(
        "Expected to have an instance of HtmlElement as possible Child"
      );
    this.children.push(child);
  }
  unshiftChild(child) {
    if (!(child instanceof HtmlElement))
      throw new Error(
        "Expected to have an instance of HtmlElement as possible Child"
      );
    this.children.unshift(child);
  }

  getHtmlAttributes() {
    if (!Array.isArray(this.attrs) || !this.attrs.length) {
      return "";
    }
    return ` ${this.attrs.reduce((accum, item) => accum + item, "")}`;
  }
  getHtmlStyles() {
    if (!Array.isArray(this.styles) || !this.styles.length) {
      return "";
    }
    return ` ${this.styles.reduce(
      (accum, item, index) =>
        (accum += `${item};${index < this.styles.length - 1 ? " " : ""}`),
      'style="'
    )}"`;
  }

  getHtml() {
    if (!this.tag) throw new Error("Element has no tag");
    let html = `<${this.tag}`;
    html += this.getHtmlAttributes();
    html += this.getHtmlStyles();
    if (this.isClose) {
      html += "/>";
      if (this.children.length)
        throw new Error("Closing element can't have children");
      if (this.text) throw new Error("Closing element can't have text");
    } else {
      html += ">";
      if (this.text) html += `\n${this.text}\n`;
      if (this.children.length)
        html += `${this.children.reduce(
          (accum, item) => accum + item.getHtml(),
          ""
        )}`;
    }
    html += `</${this.tag}>`;
    return html;
  }
}

try {
  const child = new HtmlElement(
    "div",
    false,
    "",
    [],
    ["width: 300px", "margin: 10px"],
    [
      new HtmlElement("h3", false, "What is Lorem Ipsum?", [], []),
      new HtmlElement("img", true, "", [
        'src="https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg"',
        'alt="Lorem Ipsum"',
        ["width=100%"],
      ]),
      new HtmlElement(
        "p",
        false,
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        [],
        ["text-allign: justify"],
        [
          new HtmlElement("a", false, "More...", [
            'href="https://www.lipsum.com/',
            'target="_blank"',
          ]),
        ]
      ),
    ]
  );
  const element = new HtmlElement(
    "div",
    false,
    "",
    ['id="wrapper"'],
    ["display: flex"],
    [child, child]
  );

  const html = element.getHtml();
  document.body.innerHTML = html;
} catch (e) {
  console.log(e.message);
}

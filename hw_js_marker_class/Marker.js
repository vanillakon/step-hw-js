class Marker {
  constructor(color, quantity) {
    this.color = color;
    this.quantity = quantity;
    this.str_length = null;
  }

  print(str) {
    let words = str
      .split("")
      .map((word, index) => {
        if (this.quantity >= 0.05) {
          this.quantity =
            word != " " ? (this.quantity - 0.05).toFixed(2) : this.quantity;
          return word;
        }
      })
      .join("");
    let restWords = str.slice(words.length);
    this.str_length = words.length;
    return { words, color: this.color, restWords, length: this.str_length };
  }
}

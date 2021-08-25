describe("MyString", () => {
  describe("MyString, remove()", () => {
    it('new MyString("qwerty").remove(0) => werty', () => {
      assert.equal(new MyString("qwerty").remove(0), "werty");
    });
    it('new MyString("qwerty").remove(2) => qwrty', () => {
      assert.equal(new MyString("qwerty").remove(2), "qwrty");
    });
    it('new MyString("qwerty").remove(10) => qwerty', () => {
      assert.equal(new MyString("qwerty").remove(10), "qwerty");
    });
    it('new MyString("qwerty").remove(-4) => qwerty', () => {
      assert.equal(new MyString("qwerty").remove(-4), "qwerty");
    });
  });

  describe("MyString, insert()", () => {
    it('new MyString("qwerty").insert(0, X) => Xwerty', () => {
      assert.equal(new MyString("qwerty").insert(0, "X"), "Xwerty");
    });
    it('new MyString("qwerty").insert(2, X) => qwXrty', () => {
      assert.equal(new MyString("qwerty").insert(2, "X"), "qwXrty");
    });
    it('new MyString("qwerty").insert(10, X) => qwertyX', () => {
      assert.equal(new MyString("qwerty").insert(10, "X"), "qwertyX");
    });
    it('new MyString("qwerty").insert(-4, X) => Xqwerty', () => {
      assert.equal(new MyString("qwerty").insert(-4, "X"), "Xqwerty");
    });
  });

  describe("MyString, trimSign()", () => {
    it('new MyString("qwerty").trimSign() => qwerty', () => {
      assert.equal(new MyString("qwerty").trimSign(), "qwerty");
    });
    it('new MyString("qweeeerty").trimSign() => qwerty', () => {
      assert.equal(new MyString("qweeeerty").trimSign(), "qwerty");
    });
    it('new MyString("qweeertttty").trimSign() => qwerty', () => {
      assert.equal(new MyString("qweeertttty").trimSign(), "qwerty");
    });
    it('new MyString("qwe....rty").trimSign() => qwe.rty', () => {
      assert.equal(new MyString("qwe....rty").trimSign(), "qwe.rty");
    });
  });

  describe("MyString, toggle()", () => {
    it('new MyString("qwerty").toggle() => QWERTY', () => {
      assert.equal(new MyString("qwerty").toggle(), "QWERTY");
    });
    it('new MyString("QWERTY").toggle() => qwerty', () => {
      assert.equal(new MyString("QWERTY").toggle(), "qwerty");
    });
    it('new MyString("qweRTY").toggle() => QWErty', () => {
      assert.equal(new MyString("qweRTY").toggle(), "QWErty");
    });
  });

  describe("MyString, counter()", () => {
    it('new MyString("qwerty").counter("e") => 1', () => {
      assert.equal(new MyString("qwerty").counter("e"), 1);
    });
    it('new MyString("apple").counter("p") => 2', () => {
      assert.equal(new MyString("apple").counter("p"), 2);
    });
    it('new MyString("avokado").counter("a") => 2', () => {
      assert.equal(new MyString("avokado").counter("a"), 2);
    });
  });
});

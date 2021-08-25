
describe("MyString", () => {
  describe("MyString, remove()", () => {
    describe('Positive test', () => {
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
    describe('Negative test', () => {
      it('new MyString("qwerty").remove(aaa) => Error', () => {
        try{
          new MyString("qwerty").remove('aaaa');
        }catch(e){
          assert.instanceOf(e, Error);
        }
      });
      it('new MyString("qwerty").remove() => Error', () => {
        try{
          new MyString("qwerty").remove();
        }catch(e){
          assert.instanceOf(e, Error);
        }
      });
    });
  });

  describe("MyString, insert()", () => {

    describe('Positive test', () => {
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
    describe('Negative test', () => {
      it('new MyString("qwerty").insert(aaa, X) => Error', () => {
        try{
          new MyString("qwerty").insert('aaa', "X")
        }catch(e){
          assert.instanceOf(e, Error);
        }
      });
      it('new MyString("qwerty").insert(, X) => Error', () => {
        try{
          new MyString("qwerty").insert('', "X")
        }catch(e){
          assert.instanceOf(e, Error);
        }
      });
    });
  });

  describe("MyString, trimSign()", () => {
    describe('Positive test', () => {
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
    describe('Negative test', () => {
      it('new MyString().trimSign() => Error', () => {
        try{
          new MyString().trimSign();
        }catch(e){
          assert.instanceOf(e, Error)
        }
      });
    });
  });

  describe("MyString, toggle()", () => {

    describe('Positive test', () => {
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

    describe('Negative test', () => {
      it('new MyString().toggle() => Error', () => {
        try{
          new MyString().toggle();
        }catch(e){
          assert.instanceOf(e, Error)
        }
      });
    });
  });

  describe("MyString, counter()", () => {
    describe('Positive test', () => {
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
    describe('Negative test', () => {
      it('new MyString("qwerty").counter() => Error', () => {
        try{
          new MyString("qwerty").counter();
        }catch(e){
          assert.instanceOf(e, Error);
        }
      });
    });
  });
});

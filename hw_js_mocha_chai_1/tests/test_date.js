describe("MyDate", () => {
  describe("MyDate, showDate()", () => {
    it("new MyDate(20, 1, 1990).showDate() => двадцатое января", () => {
      assert.equal(new MyDate(20, 1, 1990).showDate(), "двадцатое января");
    });
    it("new MyDate(21, 1, 1990).showDate() => двадцать первое января", () => {
      assert.equal(
        new MyDate(21, 1, 1990).showDate(),
        "двадцать первое января"
      );
    });
  });

  describe("MyDate, isFuture()", () => {
    it("new MyDate(20,5,2056).isFuture() => true", () => {
      assert.equal(new MyDate(20, 5, 2056).isFuture(), true);
    });
    it("new MyDate(20,6,1990).isFuture() => false", () => {
      assert.equal(new MyDate(20, 6, 1990).isFuture(), false);
    });
  });

  describe("MyDate, isLeapYear()", () => {
    it("new MyDate(20,6,1990).isLeapYear() => false", () => {
      assert.equal(new MyDate(20, 6, 1990).isLeapYear(), false);
    });
    it("new MyDate(20,6,2020).isLeapYear() => true", () => {
      assert.equal(new MyDate(20, 6, 2020).isLeapYear(), true);
    });
  });

  describe("MyDate, nextDay()", () => {
    it("new MyDate(20,6,2020).nextDay() => 21/6/2020", () => {
      assert.equal(new MyDate(20, 6, 2020).nextDay(), "21/6/2020");
    });
    it("new MyDate(31,1,2020).nextDay() => 1/2/2020", () => {
      assert.equal(new MyDate(31, 1, 2020).nextDay(), "1/2/2020");
    });
    it("new MyDate(28,2,2020).nextDay() => 29/2/2020", () => {
      assert.equal(new MyDate(28, 2, 2020).nextDay(), "29/2/2020");
    });
    it("new MyDate(28,6,2019).nextDay() => 1/3/2020", () => {
      assert.equal(new MyDate(28, 6, 2019).nextDay(), "29/6/2019");
    });
    it("new MyDate(31,12,2020).nextDay() => 1/1/2021", () => {
      assert.equal(new MyDate(31, 12, 2020).nextDay(), "1/1/2021");
    });
  });
});

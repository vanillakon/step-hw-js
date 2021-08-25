function createDate(date, month, year){
  if(date === '' || date === undefined || date === null || month === '' || month === undefined || month === null || year === '' || year === undefined || year === null || isNaN(date) || isNaN(month) || isNaN(year)){
    throw new Error('Ошибка! Не введен необходимый параметр.');
  }else{
    return new MyDate(date, month, year);
  }
}

describe("MyDate", () => {
  describe("MyDate, showDate()", () => {
    describe('Positive test', () => {
      it("new MyDate(20, 1, 1990).showDate() => двадцатое января", () => {
        assert.equal(createDate(20, 1, 1990).showDate(), "двадцатое января");
      });
      it("new MyDate(21, 1, 1990).showDate() => двадцать первое января", () => {
        assert.equal(
          createDate(21, 1, 1990).showDate(),
          "двадцать первое января"
        );
      });
    })
    describe('Negative test', () => {
      it("new MyDate('', 1, 1990).showDate() => Error", () => {
        assert.throws(createDate, Error);
      });
      it("new MyDate(21, '', 1990).showDate() => Error", () => {
        assert.throws(createDate, Error);
      });
    })
  });

  describe("MyDate, isFuture()", () => {
    describe('Positive test', () => {
      it("new MyDate(20,5,2056).isFuture() => true", () => {
        assert.equal(createDate(20, 5, 2056).isFuture(), true);
      });
      it("new MyDate(20,6,1990).isFuture() => false", () => {
        assert.equal(createDate(20, 6, 1990).isFuture(), false);
      });
    });
    describe('Negative test', () => {
      it("new MyDate('', 5, 2056).isFuture() => Error", () => {
        assert.throws(createDate, Error);
      });
      it("new MyDate(20, '', 1990).isFuture() => Error", () => {
        assert.throws(createDate, Error);
      });
    })
  });

  describe("MyDate, isLeapYear()", () => {
    describe('Positive test', () => {
      it("new MyDate(20,6,1990).isLeapYear() => false", () => {
        assert.equal(createDate(20, 6, 1990).isLeapYear(), false);
      });
      it("new MyDate(20,6,2020).isLeapYear() => true", () => {
        assert.equal(createDate(20, 6, 2020).isLeapYear(), true);
      });
    });
    describe('Negative test', () => {
      it("new MyDate('', 6, 1990).isLeapYear() => Error", () => {
        assert.throws(createDate, Error);
      });
      it("new MyDate(20, '', 2020).isLeapYear() => Error", () => {
        assert.throws(createDate, Error);
      });
    })
  });

  describe("MyDate, nextDay()", () => {
    describe('Positive test', () => {
      it("new MyDate(20,6,2020).nextDay() => 21/6/2020", () => {
        assert.equal(createDate(20, 6, 2020).nextDay(), "21/6/2020");
      });
      it("new MyDate(31,1,2020).nextDay() => 1/2/2020", () => {
        assert.equal(createDate(31, 1, 2020).nextDay(), "1/2/2020");
      });
      it("new MyDate(28,2,2020).nextDay() => 29/2/2020", () => {
        assert.equal(createDate(28, 2, 2020).nextDay(), "29/2/2020");
      });
      it("new MyDate(28,6,2019).nextDay() => 1/3/2020", () => {
        assert.equal(createDate(28, 6, 2019).nextDay(), "29/6/2019");
      });
      it("new MyDate(31,12,2020).nextDay() => 1/1/2021", () => {
        assert.equal(createDate(31, 12, 2020).nextDay(), "1/1/2021");
      });
    });
    describe('Negative test', () => {
      it("new MyDate('', 6, 2020).nextDay() => Error", () => {
        assert.throws(createDate, Error);
      });
      it("new MyDate(31, 1, '').nextDay() => Error", () => {
        assert.throws(createDate, Error);
      });
    })
  });
});

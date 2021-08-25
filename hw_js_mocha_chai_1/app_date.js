class MyDate extends Date {
  constructor(day, month, year) {
    super(year, month - 1, day);
  }
  showDate() {
    let arr = {
      days: {
        less: [
          "первое",
          "второе",
          "третье",
          "четвертое",
          "пятое",
          "шестое",
          "седьмое",
          "восьмое",
          "девятое",
        ],
        big: [
          "одинадцатое",
          "двенадцатое",
          "тринадцатое",
          "четырнадцатое",
          "пятнадцатое",
          "шестнадцатое",
          "семнадцатое",
          "восемнадцатое",
          "девятнадцатое",
        ],
        bigger: ["десятое", "двадцатое", "тридцатое"],
      },
      month: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
    };
    let day = this.getDate();
    let month = this.getMonth();
    let str = "";
    if (String(day)[1] == 0) {
      str = arr.days.bigger[String(day)[0] - 1];
    } else if (day > 0 && day < 10) {
      str = arr.days.less[day - 1];
    } else if (day > 10 && day < 20) {
      str = arr.days.big[("" + day)[1] - 1];
    } else if (day > 20 && day < 30) {
      str =
        arr.days.bigger[1].slice(0, -2) +
        "ь " +
        arr.days.less[String(day)[1] - 1];
    } else if (day == 31) {
      str = arr.days.bigger[2].slice(0, -2) + "ь " + arr.days.less[0];
    } else {
      return "такой даты не существует...";
    }
    return `${str} ${arr.month[month]}`;
  }
  isFuture() {
    return new Date() > this ? false : true;
  }
  isLeapYear() {
    let year = this.getFullYear() - 4;
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  nextDay() {
    //реализация при если получить дату формата "01/02/2020"
    /* return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
      .toLocaleDateString()
      .replace(/\./g, "/"); */

    //реализация при если получить дату формата "1/2/2020"
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
      .toLocaleDateString()
      .split(".")
      .map((elem, i) => {
        if (elem < 10 && i < 2) elem = elem[1];
        return elem;
      })
      .join("/");
  }
}

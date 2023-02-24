"use strict";

const calculator = {
  val1: 0,
  val2: 0,

  read() {
    if (typeof this.val1 === 'number' && typeof this.val2 === 'number') {
      this.val1 = +prompt('Введите первое значение');
      this.val2 = +prompt('Введите втрое значение');
    }
  },

  sum() {
    return this.val1 + this.val2;
  },

  mul() {
    return this.val1 * this.val2;
  },
}


calculator.read();
alert(calculator.sum());
alert(calculator.mul());


"use strict";

let num = +prompt("Введите число");

let degree = +prompt("В какую степень возвести ваше число?");

function exponentiation(num, degree = 1) {
  if (!isNaN(num) && !isNaN(degree)) {
    return Math.pow(num, degree);
  } else {
    return "some error";
  }
}

let result = exponentiation(num, degree);

alert(result);
"use strict";

let num = +prompt("Введите число");

let simple = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    simple = false;
    break;
  }
}

if (simple) {
  console.log(num, simple);
} else {
  console.log(num, simple);
}

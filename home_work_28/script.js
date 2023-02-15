"use strict";

function adder() {
  let result = 0;

  return function getSum(x) {
    result += x;
    return result;
  }
}


const sum = adder();

console.log(sum(2));
console.log(sum(100));
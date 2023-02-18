"use strict";

// Task 1
const factorial = (num) => {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};


console.log(factorial(3));



// Task 2

const pow = (num, degree) => degree === 0 ? 1 : num * pow(num, degree - 1);

console.log(pow(2, 1));



// Task 3
const sum = (a, b) => b === 0 ? a : sum(a + 1, b - 1);

console.log(sum(10, 20));
"use strict";

// Task 1
// const arr1 = [1, 2, 3];

// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);

// console.log(arr3);

// =====================

// Task 2
// const arr = [1, 2, 3];

// const revers = arr.reverse();

// console.log(revers);

// =====================

// Task 3
// const arr = [1, 2, 3];

// arr.push(4, 5, 6);

// console.log(arr);

// =====================

// Task 4
// const arr = [1, 2, 3];

// arr.unshift(4, 5, 6);

// console.log(arr);

// =====================

// Task 5
// const arr = ["js", "css", "jq"];

// const firstEl = arr.slice(0, 1);

// console.log(firstEl);

// ======================

// Task 6
// const arr = ["js", "css", "jq"];

// const lastEl = arr.slice(2);

// console.log(lastEl);

// ======================

// Task 7
// const arr = [1, 2, 3, 4, 5];

// const slice = arr.slice(0, 3);

// console.log(slice);

// ======================

// Task 8

// const arr = [1, 2, 3, 4, 5];

// const slice = arr.slice(3, 5);

// console.log(slice);

// =======================

// Task 9
// const arr = [1, 2, 3, 4, 5];

// arr.splice(1, 2);

// console.log(arr);

// =======================

// Task 10
// const arr = [1, 2, 3, 4, 5];

// const result = arr.splice(1, 3);

// console.log(result);

// =======================

// Task 11
// const arr = [1, 2, 3, 4, 5];

// const result = arr.splice(3, 0, "a", "b", "c");

// console.log(arr);

// =======================

// Task 12
// const arr = [1, 2, 3, 4, 5];

// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");

// console.log(arr);

// ========================

// Task 13
// const arr = [3, 4, 1, 2, 7];

// arr.sort();

// console.log(arr);

// ========================

// Task 14

// const arr = [5, 6, 7, 8, 9];

// let arrSum = arr.reduce((acc, value) => acc + value, 0);

// console.log(arrSum);

// ========================

// Task 15

// const arr = [5, 6, 7, 8, 9];

// const result = arr.map(item => Math.pow(item, 2));

// console.log(result);

// =========================

// Task 16
// const arr = [1, -3, 5, 6, -7, 8, 9, -11];

// const result = arr.filter(item => item > 0);

// console.log(result);

// =========================

// Task 17
// const arr = [1,-3, 5, 6,-7, 8, 9,-11];

// const result = arr.filter(item => item % 2 === 0);

// console.log(result);

// =========================

// Task 18
const arr = [5, -3, 6, -5, 0, -7, 8, 9];

let result = arr.filter((item) => item < 0);

console.log(result.length);

// =========================

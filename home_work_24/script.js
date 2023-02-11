"use strict";

// Task 1
// const arr = ["a", "b", "c", "d"];

// let str = "";

// let result = `${arr[0]} + ${arr[1]} , ${arr[2]} + ${arr[3]}`;

// str = result;

// console.log(str);

// Example #2
// const firstValue = arr.splice(0, 2).join("+");

// const secondValue = arr.splice(0, 2).join("+");

// const result = `${firstValue} , ${secondValue}`;

// console.log(result);

// ============

// Task 2
// const arr = [2, 5, 3, 9];

// let result = `${(arr[0] * arr[1]) + (arr[2] * arr[3])}`;

// console.log(result);
// ============

// Task 3

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let result = arr[1][0];

// console.log(result);

// ============

// Task 4
// const obj = {
//   js: ["jQuery", "Angular"],
//   php: "hello",
//   css: "world",
// };

// console.log(obj.js[0]);

// ============

// Task 5
// const arr = [];

// let item = "x";

// for (let i = 0; i <= 5; i++) {
//   arr.push(item);

//   item = item + "x";
// }

// console.log(arr);

// =========

// Task 6
// const arr = [];

// for (let i = 1; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += i;
//   }
//   arr.push(str);
// }

// console.log(arr);

// =========

// Task 7
// const arr = [];

// const arrFill = (value, arrSize) => {
//   for (let i = 0; i < arrSize; i++) {
//     arr[i] = value;
//   }
//   return arr;
// };

// console.log(arrFill("m", 5));

// ========================

// Example #2
// const arrFill = (value, arrSize) => new Array(arrSize).fill(value);

// console.log(arrFill("x", 20));

// console.log(arrFill("g", 20));

// ========

// Task 8
// const arrSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
//     if (sum > 10) {
//       return i + 1;
//     }
//   }
// };

// console.log(arrSum([1, 2, 3, 4, 5]));

// ============

// Task 9
// const arr = [1, 2, 3, 4, 5];

// const reversArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversArr.push(arr[i]);
// }

// console.log(reversArr);

// ==============

// Task 10
// const arr = [[1, 2, 3], [4, 5], [6]];

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   for (let j = 0; j < arr[i].length; j++) {
//     result += arr[i][j];
//   }
// }

// console.log(result);

// Exaple 2
// let result = 0;

// arr.flat(Infinity).forEach((i) => {
//   result += i;
// });

// console.log(result);

// =============

// Task 11
// const arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       result += arr[i][j][k];
//     }
//   }
// }

// console.log(result);

// Exaple 2
// F

// console.log(result);

// =============

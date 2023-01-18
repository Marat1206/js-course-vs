"use strict";

const arr = [1, 2, 3, -1, -2, -3];

function posArray(arr) {
  const exampleArr = [];
  if (arr.lenght < 0) {
    return "empty array";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      exampleArr.push(arr[i]);
    } 
  }

  if (exampleArr.length > 1) {
    return exampleArr;
  } else {
    return null;
  }
}

console.log(posArray(arr));

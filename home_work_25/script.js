'use strict';

const indexOfArr = [2, 5, 9];

const indexOf = (array, searchElement, fromIndex = 0) => {

  if (fromIndex >= array.length) {
    return -1;
  }

  let count = fromIndex;

  if (fromIndex < 0) {
    count = array.length - Math.abs(fromIndex);
  }

  for (let i = count; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

// console.log(indexOf(indexOfArr, 2));
// console.log(indexOf(indexOfArr, 9, 1));


// ===========================================

const lastIndexOfArr = [2, 5, 9, 2];

const lastIndexOf = (array, searchElement, fromIndex = array.length) => {

  let count = fromIndex;

  if (fromIndex < 0) {
    count = array.length - Math.abs(fromIndex);
  }

  for (let i = count; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};


// console.log(lastIndexOf(lastIndexOfArr, 7));
// console.log(lastIndexOf(lastIndexOfArr, 2));
// console.log(lastIndexOf(lastIndexOfArr, 2, 2));

// ================================================

function foo(element) {
  return element > 10;
}


const find = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};


// console.log(find([4, 6, 8, 10], foo));
// console.log(find([4, 5, 8, 12], foo));


//========================================================


const findIndex = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
// console.log(findIndex([4, 6, 8, 9], foo));
// console.log(findIndex([4, 6, 7, 12], foo));


// ========================================================

const includesArr = [1, 2, 3, 4];

const includes = (arr, searchElement, fromIndex = 0) => {

  let count = fromIndex;

  if (fromIndex < 0) {
    count = arr.length + fromIndex;
  }

  for (let i = count; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return true;
    }
  }
  return false;
}


// console.log(includes(includesArr, 3, 1));
// console.log(includes(includesArr, 3, 3));

//=================================================


const every = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};


// console.log(every([1, 2, 13, 4, 12], foo));
// console.log(every([11, 12, 13, 14], foo));


const some = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};


// console.log(some([1, 12, 4, 2, 8], foo));
// console.log(some([6, 7, 8, 9], foo));
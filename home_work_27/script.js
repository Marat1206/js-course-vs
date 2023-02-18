"use strict";

const palindrome = (num, step = 0) => {
  const strNum = String(num);

  if (strNum === strNum.split("").reverse().join("")) {
    return {
      result: num,
      step
    }
  } else {
    const reverseNum = Number(strNum.split("").reverse().join(""));
    return palindrome(num + reverseNum, step + 1);
  }
}

console.log(palindrome(83));
console.log(palindrome(397));

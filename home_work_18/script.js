"use srtict";

function padString(str, num, symbl = "*", bool = true) {
  if (typeof str != "string") return "Some Error";
  if (typeof num != "number") return "Some Error";
  if (typeof symbl != "string") return "Some Error";
  if (typeof bool != "boolean") return "Some Error";

  let strLength = num - str.length;

  let result = str;

  if (strLength > 0) {
    for (let i = 0; i < strLength; i++) {
      if (bool === false) {
        result = symbl + str;
      } else {
        result += symbl;
      }
    }
  } else {
    return str.substring(0, num);
  }
  return result;
}

console.log(padString("hello", 6, "*", false));

"use strict";

// Function.prototype.myBind = function (context, ...args) {
//   const foo = this;

//   return function (...newArgs) {
//     const arr = [];

//     for (let i = 0; i < args.length; i++) {
//       mergedArgs.push(args[i]);
//     }
//     for (let i = 0; i < newArgs.length; i++) {
//       mergedArgs.push(newArgs[i]);
//     }

//     return foo.apply(context, arr);
//   };
// };

Function.prototype.myBind = function (context, ...args) {
  const foo = this;

  return function (...newArgs) {
    return foo.apply(context, [...args, ...newArgs]);
  };
}




const obj = {
  name: 'Alice',
};

function sayHello() {
  return `Hello, ${this.name}!`;
}

const boundSayHello = sayHello.myBind(obj);

console.log(boundSayHello());
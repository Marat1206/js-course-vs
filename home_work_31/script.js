"use strict";

Function.prototype.myBind = function (context, ...args) {
  const foo = this;

  return function (...newArgs) {
    const arr = [];

    for (let i = 0; i < args.length; i++) {
      arr.push(args[i]);
    }
    for (let i = 0; i < newArgs.length; i++) {
      arr.push(newArgs[i]);
    }

    return foo.apply(context, arr);
  };
};

Function.prototype.myBind = function (context, ...args) {
  const foo = this;

  return function (...newArgs) {
    return foo.apply(context, [...args, ...newArgs]);
  };
}




const obj = {
  name: 'Marat',
};

function sayHello(a, b) {
  console.log(`Hello, ${this.name}!`);
  console.log(a + b);
}

const boundSayHello = sayHello.myBind(obj);

console.log(boundSayHello(5, 5));
'use strict';

let list = Array.from(document.querySelectorAll('li'));

console.log(list.length);

const liArr = [];

for (let li of list) {
  console.log(li);
  liArr.push(li.innerHTML);
}

console.log(liArr);
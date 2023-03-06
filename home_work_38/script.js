'use strict';


const generateList = (array, item) => {
  const ul = document.createElement('ul');
  item.appendChild(ul);

  array.forEach(el => {
    const li = document.createElement('li');
    ul.appendChild(li);
    Array.isArray(el) ? generateList(el, li) : li.innerHTML = el;
  });
  return array;
};


let body = document.querySelector('body');

generateList([1, 2, [1.1, 1.2, 1.3], 3], body);
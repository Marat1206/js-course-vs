'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let data = localStorage.getItem(DATE_KEY);

  if (!data) alert('No data, Please try again');

  data = JSON.parse(data);

  const ul = document.createElement('ul');

  Object.keys(data).forEach(key => {
    const li = document.createElement('li');

    li.innerHTML = `${key}: ${data[key]}`;

    ul.append(li);

  });

  document.body.append(ul);

});
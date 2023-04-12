'use strict';

const form = document.querySelector('#form');


form.addEventListener('submit', event => {
  event.preventDefault();

  const { target } = event;


  let inputs = target.querySelectorAll('input, textarea, select');


  const data = Array.from(inputs).reduce((acc, { name,value }) => {
    acc[name] = value;

    return acc;

  }, {});

  localStorage.setItem(DATE_KEY, JSON.stringify(data));

});
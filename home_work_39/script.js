'use strict';

const greateTable = () => {
  const table = document.createElement('table');

  for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
      const td = document.createElement('td');
      
      const num = ((i - 1) * 10 + j);

      td.textContent = num;

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return document.body.appendChild(table);
}

greateTable();
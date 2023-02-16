"use strct";

function count() {
  let res = 0;

  function increse() {
    res += 1;
    return res;
  }

  function decrease() {
    res -= 1;
    return res;
  }

  function value() {
    return res;
  }

  return {
    increse,
    decrease,
    value
  };
};

const getCounter = count();

getCounter.increse();
getCounter.increse();
getCounter.increse();
getCounter.increse();
getCounter.decrease();
getCounter.decrease();
getCounter.decrease();

console.log(getCounter.value());


const getCounter2 = count();


getCounter2.decrease();
getCounter2.decrease();
getCounter2.decrease();
getCounter2.increse();

console.log('==================');


console.log(getCounter2.value());
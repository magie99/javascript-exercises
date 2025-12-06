const add = function(x, y) {
	z = x + y;
  return z;
};

const subtract = function(x, y) {
	z = x - y;
  return z;
};

const sum = function(x) {
  let sum = 0;
	for (let i = 0; i < x.length; i++){
    sum += x[i];
  }
  return sum;
};

const multiply = function(x) {
  let sum = 1;
	for (let i = 0; i < x.length; i++){
    sum *= x[i];
  }
  return sum;
};

const power = function(x, y) {
	z = Math.pow(x, y);
  return z;
};

const factorial = function(x) {
  let fac = 1;
	for ( x; x > 0; x--){
    fac *= x;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

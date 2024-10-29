const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	if(arr.length === 0){
    return 0;
  }
  else{
   const result= arr.reduce((initial, element) => initial+element ,0);
   return result;
  }
};

const multiply = function(arr) {
  const result= arr.reduce((initial, element) => initial*element ,1);
  return result;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	product = 1;
  if(n==0){
    return product;
  }
  for(let i = 1; i<=n; i++){
    product*=i;
  }
  return product;
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

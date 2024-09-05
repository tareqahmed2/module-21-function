// function declaration
//
function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
const total = add(20, 30);
// console.log(total);j

function add2(price1, price2) {
  return price1 + price2;
}
const bill = add2(40, 100);
console.log(bill, total);

function doMath(num1, numb2) {
  const sum = num1 + numb2;
  const diff = num1 - numb2;
  const multi = sum * diff;
  const result = multi / 2;
  return result;
}
const result = doMath(10, 5);
console.log(result);

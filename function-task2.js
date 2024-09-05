// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function tripleDoubleMulti(number) {
  if (number % 2 === 1) {
    const result = number * 2;
    return result;
  } else if (number % 2 === 0) {
    const result = number / 2;
    return result;
  }
}
const result = tripleDoubleMulti(15);
console.log(result);
const result2 = tripleDoubleMulti(34);
console.log(result2);

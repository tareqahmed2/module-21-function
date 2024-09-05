// Write a

// function called make_avg() which will take an array of integers and the size of that array and
// return the average of those values.
const numbers = [2, 4, 4, 3, 3, 32, 22, 3, 23, 33, 3, 3333];
const size = numbers.length;
let sum = 0;
for (const num of numbers) {
  //   console.log(num);
  sum += num;
  //   console.log(sum);
}
// console.log(size);
function averageNumber(sum, size) {
  const result = sum / size;
  return result;
}

const result = averageNumber(sum, size);
console.log(`the average of this all numbers is =${result}`);

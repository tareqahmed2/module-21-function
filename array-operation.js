// objective write a function to give me the sum of all nnumber in an array
// step1
// declare a function
// step 3
// call check whetehr the function is called properly
// pas teh parameters,check wheter parameter is passed format
function sumOfNumbers(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum += number;
  }
  return sum;
}

const nums = [3, 3, 2, 4];
const sum = sumOfNumbers(nums);
console.log(`sum of number is sum: ${sum}`);

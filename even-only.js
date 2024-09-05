// create a function that will return only the even numbers

// return the sum of even number

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  //   return evens;
  return evens;
}

const numbers = [5, 4, 4, 3, 2, 4, 23, 2];
evenNumbersOnly(numbers);
const evens = evenNumbersOnly(numbers);
console.log("even numbers are", evens);

// create a function that will return only the even numbers

// return the sum of even number

function sumOfEvenNumbers(numbers) {
  const evens = [];
  let sum = 0;
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
      sum += number;
    }
  }
  //   return evens;
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log(` sum of the even number ${sum}`);

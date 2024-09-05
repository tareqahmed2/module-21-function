// Write a

// function called odd_even() which takes an integer value and tells whether this value is even or odd.If even
// return Even.If odd
// return Odd
function odd_even(int_number) {
  if (int_number % 2 == 0) {
    return console.log(`this is an even number ${int_number}`);
  } else if (int_number % 2 == 1) {
    return console.log(`this is an odd number ${int_number}`);
  }
}
odd_even(54);
odd_even(55);

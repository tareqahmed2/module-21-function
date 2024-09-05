// Task - 4
// Write a
// function called count_zero() which will take a binary string(Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’ s are there in that string.
const string = "000000001111111110000000000011111111111111000000000111111111";
let number;

function MatchZero(string) {
  let count = 0;

  for (const str of string) {
    if (str === "0") {
      count++;
    }
  }

  return count;
}
const result = MatchZero(string);
console.log(result);

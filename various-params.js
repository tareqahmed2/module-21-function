// for a given string tell me whethe it has even number of character
function evenSizeString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 == 0) {
    console.log(`even size`);
    return true;
  } else {
    console.log(`odd size`);
    return false;
  }
}
// evenSizeString(`Dhaka`);
// evenSizeString(`faka`);

function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

function numberOfElement(numbers) {
  const len = numbers.length;
  return len;
}

const len = numberOfElement([12, 45, 78, 45, 12221, 4, 5]);
console.log(len);

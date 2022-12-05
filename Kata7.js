// Currying functions: multiply all elements in an array

function multiplyAll(array) {
  return (number) => {
    return array.map((el) => el * number);
  };
}

console.log(multiplyAll([1, 2, 3])(2));
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

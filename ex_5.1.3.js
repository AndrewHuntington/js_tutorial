// define a function that returns the square of a number

// using function
function square(n) {
  return n**2;
}

console.log(square(2));
console.log(square(10));

// using fat arrow
let altSquare = (n) => {
  return n**2;
}

console.log(altSquare(2));
console.log(altSquare(10));
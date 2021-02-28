let a = ["ant", "bat", "cat", 42];

// // forEach exmaple from the book
// a.forEach(function(element) {
//   console.log(element);
// });

// // MDN way
// a.forEach(e => console.log(e));

let soliloquy = "To be, or not to be, that is the question:";

// Print each character from the soliloquy variable
// // Book way
// Array.from(soliloquy).forEach(function(character) {
//   console.log(character);
// });

// MDN way
Array.from(soliloquy).forEach(character => console.log(character));
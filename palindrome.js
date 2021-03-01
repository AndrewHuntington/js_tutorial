// // Reverses a string.
// function reverse(string) {
//   // Using Array.from() instead of string.split("") allows handling of emoji.
//   return Array.from(string).reverse().join("");
// }

// // 7.3.1 Exercises
// // Returns true if a string is blank, or only consists of whitespace.
// String.prototype.blank = function() {
//   return /^\s*$/.test(this);
// }

// // Returns the last element of an array.
// Array.prototype.last = function() {
//   return this[this.length-1];
// }

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns a lowercase version of a string.
  this.processor = string => string.toLowerCase();

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }  

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns an all-caps version of the content.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// // Example of inheritence via prototype.

// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }  
// }

// TranslatedPhrase.prototype = new Phrase();
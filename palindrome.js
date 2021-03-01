// Reverses a string.
function reverse(string) {
  // Using Array.from() instead of string.split("") allows handling of emoji.
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }

  // Returns an all-caps version of the content.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}
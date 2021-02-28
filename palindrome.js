// Reverses a string.
function reverse(string) {
  // Using Array.from() instead of string.split("") allows handling of emoji.
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent == reverse(processedContent);
}
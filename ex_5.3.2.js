// Returns an array for the username and domain for a standard email address.
function emailParts(address) {
  return address.toLowerCase().split(/@/);
}
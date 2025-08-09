/**
 * Checks if a string or number is a palindrome
 * @param {string|number} input - the input to check
 * @returns {boolean}
 */
function isPalindrome(input) {
  if (input === undefined || input === null) return false;

  const str = String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

module.exports = isPalindrome;

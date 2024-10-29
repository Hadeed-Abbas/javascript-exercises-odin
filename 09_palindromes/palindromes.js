const palindromes = function (string) {
  const alphaNumericalChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphaNumericalChars.includes(character))
    .join("");

  const reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;

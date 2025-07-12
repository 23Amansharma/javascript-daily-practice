//Reverse String using split(), reverse(), join()
// split("") → string ko array me change krna
// reverse() → array ko ulta karta hai
// join("") → wapas string me convert karta hai

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  return str.split("").reverse().join("");
}

rl.question("Enter a string to reverse: ", function(input) {
  console.log("Original:", input);
  console.log("Reversed:", reverseString(input));
  rl.close();
});

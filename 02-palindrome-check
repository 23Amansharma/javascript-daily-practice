// 🔁 Palindrome Check using string methods

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(input) {
  const original = input.toLowerCase();
  const reversed = original.split("").reverse().join("");

  if (original === reversed) {
    console.log("Yes, it's a palindrome.");
  } else {
    console.log("No, it's not a palindrome.");
  }

  rl.close();
});

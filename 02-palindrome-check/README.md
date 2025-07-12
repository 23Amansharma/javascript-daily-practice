#  Palindrome Checker (JavaScript)

This is a simple Node.js command-line application that checks whether a given string is a **palindrome** or not, using basic string manipulation methods.

## 📘 What is a Palindrome?

A **palindrome** is a word or phrase that reads the same backward as forward.

### Examples:
- `level`
- `noon`

###  Not Palindromes:
- `hello`
- `world`

---

## How it Works

The program:
1. Takes a string input from the user via terminal.
2. Converts the string to lowercase (to ignore case sensitivity).
3. Reverses the string using JavaScript string methods.
4. Compares the original and reversed strings.
5. Displays whether the input is a palindrome or not.

---

##Logic Used

```js
const original = input.toLowerCase();
const reversed = original.split("").reverse().join("");

if (original === reversed) {
  console.log("Yes, it's a palindrome.");
} else {
  console.log("No, it's not a palindrome.");
}

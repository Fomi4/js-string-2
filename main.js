// Write a program that asks user to enter a string. If the string contains a single space in the beginning and/or
// in the end it should be removed. Log the result in console. Examples:
// " John" -> "John"
// "John" -> "John"
// "John " -> "John"
// " John " -> "John"

let str = prompt("Enter text:");

console.log(str.split(' ').join(''));
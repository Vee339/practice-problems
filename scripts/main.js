// Problem #1 - Create a "Hello World" program

// let username = prompt("What is your name?");
// console.log(`Hello, ${username}, nice to meet you!`);
// ---------- The above problem is commented because there is an alert which will pop up every time we refresh the page

// Problem #2 -
// Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.

// let string = prompt("Write anything that you want to", "Example String");
let string = "Hello, this is the example string.";
console.log(string);
console.log(`"${string}" has ${string.length} characters.`);

// Problem #3 -
// Create a program that prompts for a quote and an author. Display the quotation and author as shown in example output.
// Example output - Obi-Wan Kenobi says, "These are not the droids you're looking for."

// let quote = prompt("What is the quote?");
// let author = prompt("Who said it?");

// console.log(`${author} says, "${quote}"`);

// Problem #4 -
// Create a Mad Libs. Take a verb, noun, adverb and adjective from the user and make a story out of it.

/*
const noun = prompt("What is the noun?");
const verb = prompt("What is the verb?");
const adjective = prompt("What is the adjective?");
const adverb = prompt("What is the adverb?");

console.log(
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
);

*/

// Problem #5 - Take two numbers from the user. Do the sum, multiplication, difference and quotient of those numbers.

/*
const firstNum = Number(prompt("Enter your first number, please."));
const secondNum = Number(prompt("Enter your second number."));

const sum = firstNum + secondNum;
const diff = firstNum - secondNum;
const multiplication = firstNum * secondNum;
const quotient = firstNum / secondNum;

console.log(sum, diff, multiplication, quotient);
*/

// Problem #6 - Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and age you want to retire and display the output.

/*
let age = Number(prompt("What is your current age?"));
let retirementAge = Number(prompt("At what age would you like to retire?"));

const yearsDiff = retirementAge - age;
const today = new Date();
const currentYear = today.getFullYear();
const retirementYear = currentYear + yearsDiff;

console.log(
  `You have ${yearsDiff} years left until you can retire. It's ${currentYear}, so you can retire in ${retirementYear}.`
);
*/

/*
function reverseValue(input) {
  const arrayInput = input.split("");
  const reversedArray = arrayInput.reverse();
  const joinedString = reversedArray.join("");
  return joinedString;
}

console.log(reverseValue("Veerpal Kaur"));
console.log(reverseValue("humber"));
*/

// Interview - Problem #1
// Given a string, return the first non-repeating character in it and return its index. If it does not exist, return -1.

/*
function nonRepeatingChar(input) {
  let foundChar;
  const arrayInput = input.split("");
  for (let i = 0; i < input.length; i++) {
    if (!arrayInput.find(input[i])) {
      foundChar = input[i];
    }
    return;
  }
  return foundChar;
}
*/

// console.log(nonRepeatingChar("Veerpal"));
// console.log(nonRepeatingChar("intelligence"));

// Return a random item from the array
function randomPick(array) {
  const itemsCount = array.length;
  const randomIndex = Math.floor(Math.random() * itemsCount);
  const randomItem = array[randomIndex];
  return randomItem;
}

console.log(randomPick([5, 7, 3, 9, 7, 34, 89, 25]));

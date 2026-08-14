"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = 7;
const closingHour = 19;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour}:00 to ${closingHour}:00.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
const messyText = "  MAISON sarah bakery  ";

const cleanedText = messyText.trim().toLowerCase().replace("sarah", "Sarah");

console.log(cleanedText);

// trim() removes spaces at the beginning and end.
// toLowerCase() converts the text to lowercase.
// replace() replaces one word with another.

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.
// Part three.
// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

// The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain, bread";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length);
console.log(product.indexOf("bread"));
console.log(
  product.slice(product.indexOf("bread"), product.indexOf("bread") + 5),
);

const products = flavorList.split(",");
console.log(products);

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.
const finalPrice = netPrice * (1 + taxRate);

console.log(`Final price: €${finalPrice.toFixed(2)}`);

// toFixed() must come last because formatting converts the number to a string.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);

const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);

// * 11 creates 11 possible values (0–10), and +10 shifts them to 10–20.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const bakeryMessage = "Welcome to Maison Sarah";

console.log(bakeryMessage.includes("Sarah"));

// includes() checks whether a string contains a specified piece of text.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
const firstName = "Max";
const lastName = "Mustermann";

const username = (firstName[0] + lastName).toLowerCase();

console.log(username);

const adjective = "crazy";
const noun = "croissant";
const verb = "danced";
const place = "Berlin";

console.log(`The ${adjective} ${noun} ${verb} all the way to ${place}.`);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.

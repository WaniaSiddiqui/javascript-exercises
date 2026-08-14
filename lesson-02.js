'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const bakeryName = "Sweet Treats"; // const because the name of the bakery does not change
let openingHour = 8; // let because the opening hour may change
let closingHour = 20; // let because the closing hour may change
const staffCount = 5; // const because the number of staff is fixed for now
let dailySpecial = "Chocolate Cake"; // let because the daily special changes every day


// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof bakeryName);
console.log(typeof openingHour);
console.log(typeof closingHour);
console.log(typeof staffCount);
console.log(typeof dailySpecial);

console.log(typeof null);
console.log(typeof undefined);


// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let futureProduct;
let soldOutProduct = null;

console.log(futureProduct);
console.log(typeof futureProduct);

console.log(soldOutProduct);
console.log(typeof soldOutProduct);

// undefined means a value has not been assigned, while null is an intentional empty value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
const count = Number(countText);
const flag = Boolean(flagText);

const priceAsString = String(price);

console.log(price, typeof price);
console.log(count, typeof count);
console.log(flag, typeof flag);
console.log(priceAsString, typeof priceAsString);

// Number() would produce NaN if the string were not a clean number.


// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

let bakeryName = "Sweet Treats";
bakeryName = "The Corner Bakery";

let openingHour = 7;

let staffCount = 12;
console.log(staffCount);

// Changed bakeryName from const to let because it is reassigned.
// Declared openingHour before assigning a value to it.
// Moved staffCount declaration before using it.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(staffCount);
// let staffCount = 12;


// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = "bread";
let b = "cake";

let temporary = a;
a = b;
b = temporary;

console.log(a);
console.log(b);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.

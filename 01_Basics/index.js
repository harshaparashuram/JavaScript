
// Parentheses or Round Brackets:
// ( : Opening Parenthesis
// ) : Closing Parenthesis

// Curly Braces or Curly Brackets:
// { : Opening Curly Brace
// } : Closing Curly Brace

// Square Brackets:
// [ : Opening Square Bracket
// ] : Closing Square Bracket

// Account information

const accountId = 13071999;
let accountName = "Harsha";
var accountPassword = "LeaveMeAl1";
accountCity = "Davanagere";

console.log(accountId);

console.table([accountId, accountName, accountPassword, accountCity]);
// the above line will display table with index numbers


console.table({accountId, accountName, accountPassword, accountCity});
// the above line will display table with variable name and values just change square bracket with curly braces


// console.log(): Outputs general messages or variables to the console.

const message = "Hello, world!";
console.log(message);

// console.error(): Outputs error messages in red, useful for debugging.
console.error("This is an error message.");

// console.warn(): Outputs warning messages, typically shown in yellow.
console.warn("This is a warning message.");

// console.info(): Outputs informational messages (often the same as console.log()).
console.info("This is an informational message.");

// console.table(): Displays data in a table format, useful for arrays and objects.
const user = { id: 1, name: "Harsha", city: "Davanagere" };
console.table(user);

const users = [
  { id: 1, name: "Harsha", city: "Davanagere" },
  { id: 2, name: "John", city: "Bangalore" }
];
console.table(users);

// console.group() and console.groupEnd(): Groups related logs together, allowing you to collapse or expand them.

console.group("User Details");
console.log("Name: Harsha");
console.log("City: Davanagere");
console.groupEnd();


// console.time() and console.timeEnd(): Measures the time taken to execute a block of code.

console.time("Timer");
// Some code
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Timer"); // Outputs the time taken



// console.assert(): Logs a message only if the assertion is false.

const age = 20;
console.assert(age >= 21, "Age is less than 21!"); // Will log because the assertion is false



// console.count() and console.countReset(): Counts the number of times a label is logged.
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter");
console.count("Counter");

// console.trace(): Logs a stack trace to help track the origin of where a function was called.

function firstFunction() {
  secondFunction();
}

function secondFunction() {
  console.trace("Tracking the function call origin");
}

firstFunction();

// console.dir(): Displays an interactive list of the properties of a specified object.

const obj = { name: "Harsha", city: "Davanagere", skills: ["HTML", "CSS", "JavaScript"] };
console.dir(obj);

// console.clear(): Clears the console.

// console.clear();

// console.groupCollapsed(): Similar to console.group(), but starts the group in a collapsed state.

console.groupCollapsed("Collapsed Group");
console.log("This is inside the collapsed group.");
console.groupEnd();

// console.debug(): Outputs a message at the "debug" log level, which is similar to console.log() but typically hidden by default in some environments.

console.debug("This is a debug message.");


// console.dirxml(): Displays an XML/HTML element representation, useful for logging DOM elements.

/*const element = document.querySelector("body");
console.dirxml(element);*/

// console.profile() and console.profileEnd(): Starts and ends a JavaScript CPU profile recording. This is useful for performance analysis (available in some browsers' developer tools).

/*console.profile("Performance Profile");*/

// console.memory: Provides a snapshot of the memory usage (available in some environments like Chrome).

/*console.log(console.memory);*/


// console.timeStamp(): Adds a timestamp in the browser's performance or timeline tool.

console.timeStamp("Check point");


// console.table() (extended usage): Besides arrays and objects, you can use it with arrays of objects to display more complex tables.

const people = [
  { id: 1, name: "Harsha P", role: "Developer" },
  { id: 2, name: "John", role: "Designer" }
];
console.table(people);

// console.exception() (available in some environments): Logs an error message with additional context (deprecated in many browsers).

/*try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.exception(error);
}*/


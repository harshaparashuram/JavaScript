/*In javascript we have two types of data types 
1)primitive data types
2)non-primitive data types


1)primitive data types:- Primitive data types are the most basic data types in JavaScript.
 They are immutable, meaning their values cannot be changed after they are created
 JavaScript has 7 primitive data types:(SNBUNSB)
 1)String :- represents textual data
 Example: "Hello, world!"

 2)Number:-represtes numeric value
 Example: 42, 3.14

 3)Boolean :- represents logical value
 Example: true, false

 4)Undefined :- represents a variable that has been declared but not yet assigned a value
 Example: let x; (here, x is undefined)

 5)Null :- represents intentional absence of any object value
 Example: let y = null;

 6)Symbol :- represents a unique identifier
 Example: let sym = Symbol('description');
 
 7)BigInt :- represent integer with arbitrary precision
 Example: let bigInt = 1234567890123456789012345678901234567890n;



2)Non-Primitive Data Types
Non-primitive data types, also known as reference types, are objects in JavaScript. 
Unlike primitive types, non-primitive types can hold collections of values and more complex entities. 
They are mutable, meaning their content can be changed.

a)Object:-The core non-primitive data type, used to store collections of key-value pairs.
Example: 
let obj = { name: "Harsha", age: 25 };

b)Array:- A special type of object used to store ordered lists of values.
Example:
let arr = [1, 2, 3, 4, 5];

c)Function:- A block of code designed to perform a specific task, also considered an object in JavaScript.
Example:
function greet() {
    return "Hello, world!";
}

d)Date:- An object type used to represent dates and times.
Example:
let today = new Date();



d)Map:-A collection of keyed data items, similar to an object but with more flexibility.
Example:
let map = new Map();
map.set('key', 'value');

e)Set:- A collection of unique values.
Example:
let set = new Set([1, 2, 3, 3]); // Set { 1, 2, 3 }

f)WeakMap:- Similar to Map, but keys must be objects and are weakly referenced.
Example:
let weakMap = new WeakMap();

g)WeakSet:- Similar to Set, but values must be objects and are weakly referenced.
Example:
let weakSet = new WeakSet();*/


// Primitive Data Types

// String
let stringExample = "Hello, world!";
console.log("String:", stringExample);

// Number
let numberExample = 42;
console.log("Number:", numberExample);

// Boolean
let booleanExample = true;
console.log("Boolean:", booleanExample);

// Undefined
let undefinedExample;
console.log("Undefined:", undefinedExample);

// Null
let nullExample = null;
console.log("Null:", nullExample);

// Symbol
let symbolExample = Symbol('unique');
console.log("Symbol:", symbolExample);

// BigInt
let bigIntExample = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntExample);

// Non-Primitive Data Types

// Object
let objectExample = { name: "Harsha", age: 25 };
console.log("Object:", objectExample);

// Array
let arrayExample = [1, 2, 3, 4, 5];
console.log("Array:", arrayExample);

// Function
function greet() {
  return "Hello, world!";
}
console.log("Function:", greet);

// Date
let dateExample = new Date();
console.log("Date:", dateExample);

// RegExp
let regExpExample = /ab+c/;
console.log("RegExp:", regExpExample);

// Map
let mapExample = new Map();
mapExample.set('key', 'value');
console.log("Map:", mapExample);

// Set
let setExample = new Set([1, 2, 3, 3]); // Duplicates are removed
console.log("Set:", setExample);

// WeakMap
let weakMapExample = new WeakMap();
let obj = {};
weakMapExample.set(obj, 'value');
console.log("WeakMap:", weakMapExample);

// WeakSet
let weakSetExample = new WeakSet();
let obj2 = {};
weakSetExample.add(obj2);
console.log("WeakSet:", weakSetExample);




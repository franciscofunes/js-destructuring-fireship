/*
 *  First example of destructuring
 *
 */

const arr = ["🥓", "🍔", "🍟", "🍕"];

const bacon = arr[0];
const burger = arr[1];
const fries = arr[2];
const pizza = arr[3];

// We can do the same thing with a single line of code
const animals = ["🐎", "🐔", "🐶", "🐷"];

const [horse, chicken, dog, pig] = animals;

// With the following console log you can see how the position of the variable name matches the values index in the array
console.log(`${horse} ${chicken} ${dog} ${pig}`); // 🐎 🐔 🐶 🐷

/*
 *  Destructing features we can use
 *
 */

// When working with arrays you may want to ommit a value
const fruits = ["🍐", "🍊", "🍌", "🍎"];

const [, , , apple] = fruits;
console.log(apple); // 🍎

// In other cases you might want to name the first couple variables and then put the remainder in their own array
// This achieve putting ... in front of the variable name
const [first, second, ...remaining] = fruits;
console.log(remaining); // [🍌, 🍎]

// You can also assign default values case the value in the array is undefined
const [first2 = "🍎", second2 = "🍊", ...remaining2] = fruits;

//Destructuring also applies to objects

const obj = {
  name: "Francisco",
  age: 31,
};

/*
 *  Variable renaming
 *
 */

// For avoiding name collisions we can assign anothe name to the variable with colon
// You can add defaults values as well
const { name: username = "John doe", age: userAge = "18" } = obj;

// Renaming can help when working with objects that don't use valid variable names
// Example:
const obj2 = {
  "kebab-case": "🍔",
  banana: "🍌",
  pepper: "🌶",
};

const { "kebab-case": hamburguer } = obj2;

/*
 *  Nested objects
 *
 */

// You can also use a colon to access nested objects
// In other words set a variable from an object within an object
const obj3 = {
  parent: {
    child: "👨‍🍼",
  },
};

const {
  parent: { child: baby },
} = obj3;
console.log(child); // 👨‍🍼

/*
 *  Loops
 *
 */

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

// you can also use destructuring to loop through an array
for (const { id } of users) {
  console.log(id); // 1 2 3
}

/*
 *  Functions args
 *
 */

const user = { id: 0, username: "jeff" };

// When working with functions you can use destructuring to pass arguments
function haveFun({ id, username }) {
  console.log(`hi ${username}`);
}

/*
 *  Variable Swapping
 *
 */

//You can use destructuring for swapping variables values
//Normally you would have to make a temporary variable to swap the values
// But with array destructing you can do it in one line

let a = "foo";
let b = "bar";

// long way
let temp = a;
a = b;
b = temp;

// Destructiring way
// The original two values in an array but in the reverse order
[a, b] = [b, a];

var re = /\w+\s/g;
var str = "fee fi fo fum";

/*
 *  Regular expressions
 *
 */

// destructuring can also be used with regular expressions
// When you run a match function on the string it returns an array of results
// You can then provide descriptive variable names to the regular expression matches

const [fee, fi, fo] = str.match(re);

/*
 *  Dynamic properties
 *
 */

// Imagine you want to destructure an object but you dont know property name until runtime
// You can use computed properties and destructuring as you can with object literals
// By wrapping a property in brackets now takes a variables as its value instead of a static name
// In other words is computer at runtime
// You can then follow with a colon to provide it with a static variable name yo use in your code
const randomKey = () => Math.random().toString(36).substring(2, 15);

const random = randomKey();

const obj4 = {
  [random]: "🍎",
};

const { [random]: DynamicApple } = obj4;

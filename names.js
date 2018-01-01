//Create a function, names, that takes an array of objects as an argument. Return a string containing all of the object names separated by a comma.

// Use only the objects provided below:
//a function called "names" that takes an Array of Objects and returns a STRING of all the names from the objects.
// use a .map function?/ look at strings

let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };

let people = [a, b, c];


let names = arr => {

let map = arr.map(val => val.name);

	return map.toString();

};


let result = names(people); // "Alice, Bob, Charlie"
console.log(result)




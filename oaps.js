//Create a function, oaps, that takes an array of objects. It should return an array containing only those objects that have an age property greater than 65

// Use only the objects provided below:
//a function called "oaps" that takes an Array of Objects and returns only an Array of objects that are over 65.
// use filter function

let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };
let d = { name: "Bob", age: 97 };

let folks = [a, b, c, d];




let oaps = arr => {

let filter = arr.filter(val => val.age > 65);
	return filter
	
};


let result = oaps(folks); // [{ name: "Bob", age: 97 }]
console.log(result)




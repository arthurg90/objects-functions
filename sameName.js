// Create a function, sameName, that takes two objects as arguments. Return true if the objects have the same name property and false if they have different names.

// Use only the objects provided below:
// Need a function taking two OBJECTS and compare them, if they have the same name, return TRUE and FALSE if they are not
// not an if statement?
//.keys method?

/*

let a = { name: "Alice", age: 52 };
let b = { name: "Bob", age: 34 };
let c = { name: "Charlie", age: 24 };
let d = { name: "Bob", age: 97 };

let sameName = (x, y) => {		
	if (x.name !== y.name) {
		return false;		
	}		
return true;

};

let result = sameName(d, b); 
console.log(result)

*/

//Alt solution got all values in the object instead of just 2


let sameName = (x, y) => x.name === y.name;

let sameNames = arr => 

let objects = [
	{ name: "Alice", age: 52 },
	{ name: "Bob", age: 34 },
	{ name: "Charlie", age: 24 },
	{ name: "Bob", age: 97 },
]

console.log(sameNames(objects));


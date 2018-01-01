//Create a function, roots, that takes an array of numbers. The function should return an array of the square roots of each number:

// need to return an array of the square root of each number in the array
// gotta use Math.sqrt() function to get the square root of the values in the array + map array function




let roots = arr => {		
	let rts = arr.map(val => Math.sqrt(val));
	return rts;
	
};

let result = roots([4, 16, 2500]);
console.log(result)


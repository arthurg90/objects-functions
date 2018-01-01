//Create a function, hypotenuse, that takes two numbers representing the "leg" sides of a right-angled triangle. Return the length of the hypotenuse.
// need to return the hypotenuse of a triangle which is h = √a^2 + b^2
// use Math.sqrt(); object function and the squares function 



let hypotenuse = (a, b) => {		
	let hyp = Math.sqrt(a*a + b*b);
	return Math.floor(hyp);	
};

let result = hypotenuse(6, 9); 
console.log(result)


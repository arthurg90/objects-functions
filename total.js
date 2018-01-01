//Create a function, total, that takes an array of shopping items and adds their price together.

// Use only the objects provided below:
//a function called "total" that takes Arrays and adds up only their price
// use a foreach or reduce? function

let items = [{name: "coffee",
    price: 3.50,
}, {
    name: "tea",
    price: 2.50,
}, {
    name: "toblerone",
    price: 3.20,
}, {
    name: "newspaper",
    price: 0.10,
}];



let total = arr => {

	let sum = arr.reduce((total, obj) => total + obj.price, 0); 

	return sum.toPrecision(2);

};


let result = total(items); 
console.log(result)



// total(items); // 9.3
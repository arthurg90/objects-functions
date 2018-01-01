//Create an object that represents an address - use different properties for each part of the address. It should have a fullAddress method, which will return the full address as a nicely formatted string.

// First try using an object literal
// Then try creating and using an Address class


// //Object literal:

// let address = { 
//     number: 1, 
//     road: "Made Up Street",
//     town: "Bristol",
//     postcode: "BS4 8TR",
// };

// let fullAddress = ({ number, road, town, postcode }) => address.number + " " + address.road + " " + address.town + " " + address.postcode;
// return fullAddress;
    
// }



let address = { 
    road: "1 Made Up Street",
    town: "Bristol",
    postcode: "BS4 8TR",

    fullAddress() {
    	let props = [
    		this.street,
    		this.postcode,
    		this.town,
    	];

    	return  props.join(", ");

    }
};


console.log(address.postcode);
console.log(address.town);
console.log(address.fullAddress());	



//Class

class Address {
	constructor() {

}
	fullAddress() {
    	let props = [
    		this.street,
    		this.postcode,
    		this.town,
    	];

    	return props.join(", ");

    }

};

let address = new Address(
	"1 Made Up Street",
    "Bristol",
    "BS4 8TR"

);


let address2 = new Address(
	"2 Made Up Street",
    "Bristol",
    "BS4 8TR"
);



console.log(address.postcode);
console.log(address.town);
console.log(address.fullAddress(address));	
console.log(address.fullAddress(address2));	







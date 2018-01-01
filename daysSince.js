// Create a function, daysSince, that you pass a date. It should tell you how many days have passed since that date:

// let newYear = new Date("2017-01-01T00:00:00"); // a date object representing now
// let birthdate = new Date("1984-04-16T00:00:00");

// difference = (newYear.getTime() - birthdate.getTime()) / 86400000 

// console.log(difference);




// let result = daysSince("1984-04-16"); // 11948 days = 1032307200000 ms / 1000 (to get seconds) / 60 (mins) / 60 (hours) / 24 ((to get days)

// console.log(result);



let daysSince = date => {
	let now = new Date();
	let oldDate = new Date(date);
	difference = (now - oldDate) / 86400000;
	return Math.floor(difference);
}

let result = daysSince("1984-04-16");
console.log(result);





//Web Storage
/*
setTimeout(wake, 5000);
function wake() {
	alert("Hello World!");
} */


//sum
function sum_compute() {
	console.log("Begin function \'sum\'");
	var int_one = 3;
	console.log("int_one = " + int_one);
	var int_two = 14;
	console.log("int_two = " + int_two);
	var result = int_one + int_two;
	console.log("The sum is = " + result);
	document.getElementById('sum').innerHTML = "Sum of two integers = " + result;
}

sum_compute();

function sum_mult() {
	console.log("Begin function \'multiply\'");
	var int_one = 3;
	console.log("int_one = " + int_one);
	var int_two = 14;
	console.log("int_two = " + int_two);
	var result = int_one * int_two;
	console.log("The product is = " + result);
	document.getElementById('mult').innerHTML = "Product of two integers = " + result;
}

sum_mult();

function sum_trip() {
	console.log("Begin function \'triple the sum\'");
	var int_one = 3;
	console.log("int_one = " + int_one);
	var int_two = 14;
	console.log("int_two = " + int_two);
	var result = (int_one + int_two) * 3;
	console.log("Triple the sum is = " + result);
	document.getElementById('trip').innerHTML = "Triple the sum of two integers = " + result;
}

sum_trip();

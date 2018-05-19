//Web Storage
/*
setTimeout(wake, 5000);
function wake() {
	alert("Hello World!");
} */


//sum
function sum_compute() {
	var int_one = 3;
    var int_two = 14;
	var result = int_one + int_two;
	document.getElementById('sum').innerHTML = "Sum of two integers = " + result;
}

sum_compute();

function sum_mult() {
	var int_one = 3;
    var int_two = 14;
	var result = int_one * int_two;
	document.getElementById('mult').innerHTML = "Product of two integers = " + result;
}

sum_mult();

function sum_trip() {
	var int_one = 3;
    var int_two = 14;
	var result = (int_one + int_two) * 3;
	document.getElementById('trip').innerHTML = "Triple the sum of two integers = " + result;
}

sum_trip();
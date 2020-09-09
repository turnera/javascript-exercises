function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (x) {
	let sum = 0;
	for(let i = 0; i< x.length; i++)
		sum += x[i];
		
	return sum;
}

function multiply(x) 
{
	let result = 1;
	for(let i = 0; i < x.length; i++)
		result *= x[i];
	
	return result;
}

function power(x, y) {
	return Math.pow(x, y);
}

function factorial(num) {
	
	if(num < 0)
		return -1;
	else if (num == 0)
		return 1;
	else
	{
		return num * factorial(num - 1);
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
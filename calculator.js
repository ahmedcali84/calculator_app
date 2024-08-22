const addition = function add(array)
{
	return array.reduce((total, num1) => total + num1 , 0);
}

const subtraction = function sub(num1 , num2)
{
	return num1 - num2;
}

const multiplication = function mult(array)
{
	return array.reduce((total , num1) => total * num1 , 1);
}

const division = function divide(num1 , num2)
{
	return num1 / num2;
}

let numberOne;
let operator;
let numberTwo;

const operate = function calc(num1 , num2 , operato)
{
	switch (operato)
	{
		case '+':
		addition([num1,num2]);
		break;

		case '-':
		subtraction(num1,num2);
		break;

		case '*':
		multiplication([num1,num2]);
		break;

		case '/':
		division(num1,num2);
		break;
	}
}

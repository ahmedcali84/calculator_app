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

const operate = function calc(num1 , num2 , operato)
{
	switch (operato)
	{
		case '+':
		return addition([num1,num2]);
		break;

		case '-':
		return subtraction(num1,num2);
		break;

		case '*':
		return multiplication([num1,num2]);
		break;

		case '/':
		return division(num1,num2);
		break;
	}
}


const populate = function populate()
{
	const inputField = document.getElementById('inputs');
	inputField.focus();

	let buttonButton = document.querySelectorAll('button');
	buttonButton.forEach(element => {
		element.addEventListener('click' , () => {
			inputField.value += element.textContent;
		})
	});
}

const Operation = function operateInput()
{
	const values = document.getElementById('inputs');
	const equals = document.getElementById('equal');

	equals.addEventListener('click', () => {
		let input = values.value;

		if(input.includes("="))
		{
			input = input.replace("=" , "");
		}

		const operator = input.match(/[+\-*/]/);
		console.log(operator);

		const [num1 , num2] = input.split(operator).map(Number);
		console.log(`${num1} , ${num2}`);
		
		const answer = operate(num1 , num2 , operator[0]);

		const answerField = document.getElementById('answer');
		answerField.textContent = answer;
		values.value = "";
	});
}

populate();
Operation();
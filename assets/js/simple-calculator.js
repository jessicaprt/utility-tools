var operands = [];
var currOperator;
var value;

function getExpressionElement() {
	return document.getElementById("expression");
}

function getResultElement() {
	return document.getElementById("sc-result");
}

function addToExpression(inp, isOperator) {
	
	var expression = getExpressionElement();
	var printToResult = getResultElement();
	var result = getResultElement();
	
	if (!isOperator) {
		expression.innerHTML += inp;
	}
		
	if (isOperator) {
		var getOperands = expression.innerHTML.split(/[\+\—\*\/]+/);
		operands = getOperands;
		
		if (operands.length == 2) {
			value = evaluate(getOperands, currOperator);
			
			operands = [];
			operands[0] = value;
			
			expression.innerHTML = value;
			
			expression.innerHTML += inp;
		} else {
			expression.innerHTML += inp;
		}
		currOperator = inp;
	}
}

function clearScreen() {
	getExpressionElement().innerHTML = "";
	getResultElement().innerHTML = "";
}

function evaluate(operands, inp) {
	switch(inp) {
		case '+':
			return Number(operands[0]) + Number(operands[1]);
			break;
		case '—':
			return Number(operands[0]) - Number(operands[1]);
			break;
		case '/':
			return Number(operands[0]) / Number(operands[1]);
			break;
		case'*':
			return Number(operands[0]) * Number(operands[1]);
	}
}

function showValue() {
	var getOperands = expression.innerHTML.split(/[\+\—\*\/]+/);
	console.log(getOperands);
	console.log(currOperator);
	var finalValue = evaluate(getOperands, currOperator);
	console.log(finalValue);
	getResultElement().innerHTML = finalValue;
}
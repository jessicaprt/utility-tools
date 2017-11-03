var radioOptions = document.getElementsByName("option");
var result = document.getElementById("converter-result");

function getOption() {
	
	var numOptions = radioOptions.length;
	for (var i=0; i < numOptions; i++) {
		if(radioOptions[i].checked) {
			return i;
		}
	}
}

function getInputValue() {
	var inputValue = Number(document.getElementById("inputValue").value);
	
	return inputValue;
}

function convert() {
	
	var result = document.getElementById("converter-result");
	var option = getOption();
	
	switch(option) {
		case 0:
			result.innerHTML = metresFeet(true, 1) + " ft";
			break;
		case 1:
			result.innerHTML = metresFeet(false, 1) + " m";
			break;
		case 2:
			result.innerHTML = kilometresMiles(true, 1) + " mi";
			break;
		case 3:
			result.innerHTML = kilometresMiles(false, 1) + " km";
			break;
		case 4:
			result.innerHTML = metresFeet(true, 3) + " ft<sup>3</sup>";
			break;
		case 5:
			result.innerHTML = metresFeet(false, 3) + " m<sup>3</sup>";
			break;
		case 6:
			result.innerHTML = metresFeet(true, 2) + " ft<sup>2</sup>";
			break;
		case 7:
			result.innerHTML = metresFeet(false, 2) + " m<sup>2</sup>";
			break;
		case 8:
			result.innerHTML = kilometresMiles(true, 2) + " mi<sup>2</sup>";
			break;
		case 9:
			result.innerHTML = kilometresMiles(false, 2) + " km<sup>2</sup>";
			break;
		case 10:
			result.innerHTML = gramPound(true) + " lb";
			break;
		case 11:
			result.innerHTML = gramPound(false) + " g";
			break;
		default:
			result.innerHTML = "--";
	}
}

function metresFeet(condition, power) {
	var inputValue = getInputValue();
	var result;
	
	if (condition == true)
		result = (inputValue * Math.pow(3.28084,power));
	else
		result = (inputValue / Math.pow(3.28084,power));
	
	return Number(result.toFixed(4));	
}

function kilometresMiles(condition, power) {
	var inputValue = getInputValue();
	var result;
	
	if (condition == true)
		result = (inputValue * Math.pow(0.621371,power));
	else
		result = (inputValue / Math.pow(0.621371,power));
	
	return Number(result.toFixed(4));	
}

function gramPound(condition) {
	var inputValue = getInputValue();
	var result;
	
	if (condition == true)
		result = (inputValue * 0.00220462);
	else 
		result = (inputValue / 0.00220462);
	return Number(result.toFixed(4));
}

function changeConversionString(idx) {
	document.getElementById("conversion-string").innerHTML = radioOptions[idx].value;
}
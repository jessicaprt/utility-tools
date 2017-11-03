var asyncRequest;

function registerListeners() {
	var tool;
	
	tool = document.getElementById("measurement-converter");
	tool.addEventListener("click", function() { getContent("measurement-converter.html"); }, false);
	
	tool = document.getElementById("mortgage-calculator");
	tool.addEventListener("click", function() { getContent("mortgage-calculator.html"); }, false);
	
	tool = document.getElementById("simple-calculator");
	tool.addEventListener("click", function() { getContent("simple-calculator.html"); }, false);
}

function getContent(url) {
	try {
		asyncRequest = new XMLHttpRequest();
		
		asyncRequest.addEventListener(
			"readystatechange", switchTool, false);
		asyncRequest.open("GET", url, true);
		asyncRequest.send(null);
	} catch (exception) {
		alert("Request Failed!");
	}
}

function switchTool() {
	clearContent();
	if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
		
		document.getElementById("content").innerHTML = asyncRequest.responseText;								
								
	}
}

function clearContent() {
	document.getElementById("content").innerHTML = "";
}

window.addEventListener("load", registerListeners, false);
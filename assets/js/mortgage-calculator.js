function mortgageCalculator() {
    cleanInputBoxes();
    
    var principalElement = document.getElementById("principal");
    var principal = Number(principalElement.value);
    
    var interestElement = document.getElementById("interest");
    var interest = Number(interestElement.value);
    
    var periodElement = document.getElementById("period");
    var period = Number(periodElement.value);
    
    var invalidValues = [];
    var errorMessages = [];
    
    if (isNaN(principal)) {
        invalidValues.push("Principal Amount");
        errorMessages.push("Principal Amount should be a number");
        principalElement.className = "input-error";
    } else {
        if (principal < 0) {
            errorMessages.push("Principal Amount cannot be negative");
        }
    }
    
    if (isNaN(interest)) {
        invalidValues.push("Interest Rate");
        errorMessages.push("Interest Rate should be a number");
        interestElement.className = "input-error";
    } else {
        if(interest < 0 || interest > 100) {
            errorMessages.push("Interest rate should be a value within 0 to 100");
        }
    }
    
    if (isNaN(period)) {
        invalidValues.push("Amortization Period");
        errorMessages.push("Amortization Period should be a number");
        periodElement.className = "input-error";
    } else {
        if(period < 0) {
            errorMessages.push("Amortization Period cannot be negative");
        }
    }
    
    if (invalidValues.length != 0) {
        alert("Invalid values for: \n    " + invalidValues.join(", ") 
              + "\n\n" + "Error Message(s):" + "\n    "
              + errorMessages.join("\n    "));
        
    } else {
        var numerator = interest/100 * Math.pow((1+ interest/100), period*12);
    
        var denominator = Math.pow((1+ interest/100), period*12) - 1;

        var result = principal * (numerator/denominator);

        document.getElementById("mc-result").innerHTML = result;
    } 
}

function cleanInputBoxes() {
    document.getElementById("principal").className = "";
    document.getElementById("interest").className = "";
    document.getElementById("period").className = "";
}